FROM jupyter/base-notebook

USER $NB_UID

# Install Python packages
RUN set -ex \
    && pip3 install --quiet --no-cache-dir --upgrade \
    # choose the python packages you need
    'pillow' \
    'voila' \
    'ipywidgets' \
    'elyra[all]'

# Build and execute JupyterLab
RUN set -ex \
    # Install JupyterLab extensions
    # jupyter labextension install jupyterlab-code-snippets --no-build \
    && jupyter lab build --LabApp.token='' -y \
    && jupyter lab clean -y \
    && rm -rf "/home/${NB_USER}/.cache/yarn" \
    && rm -rf "/home/${NB_USER}/.node-gyp" \
    && rm -rf "/home/${NB_USER}/work/" \
    && fix-permissions "${CONDA_DIR}" \
    && fix-permissions "/home/${NB_USER}"