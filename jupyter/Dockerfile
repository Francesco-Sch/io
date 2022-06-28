FROM jupyter/minimal-notebook

USER root

RUN apt update && apt install curl gnupg2 -y
RUN curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add
RUN bash -c "echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' >> /etc/apt/sources.list.d/google-chrome.list"
RUN apt update && apt install google-chrome-stable -y

USER $NB_UID

# Install Python packages via pip
RUN set -ex \
    && pip3 install --quiet --no-cache-dir --upgrade \
    # choose the python packages you need
    'pillow' \
    'voila' \
    'ipywidgets' \
    # 'ipyvue' \
    # 'ipyvuetify' \
    'elyra-code-snippet-extension' \
    'jupyter_packaging' \
    'cookiecutter' \
    'ipylab' \
    'jupyterlab-unfold'

# Install packages via conda
RUN conda install nodejs yarn

# Uninstall unecessary packages from base docker image
RUN pip uninstall jupyterlab-git -y

# Build and execute JupyterLab
RUN set -ex \
    # Install JupyterLab extensions
    # jupyter labextension install ... --no-build \
    && jupyter lab build -y \
    && jupyter lab clean -y \
    && rm -rf "/home/${NB_USER}/.cache/yarn" \
    && rm -rf "/home/${NB_USER}/.node-gyp" \
    && rm -rf "/home/${NB_USER}/work/" \
    && fix-permissions "${CONDA_DIR}" \
    && fix-permissions "/home/${NB_USER}" 

# Disable unneeded extensions
RUN jupyter labextension disable \
    @jupyterlab/statusbar-extension \
    @jupyterlab/debugger-extension \
    @elyra/theme-extension