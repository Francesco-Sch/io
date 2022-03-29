FROM jupyter/scipy-notebook

# Never prompt the user for choices on installation/configuration of packages
ENV DEBIAN_FRONTEND noninteractive
ENV TERM linux

USER $NB_UID

# Install Python packages
RUN set -ex \
    && conda install --quiet --yes --channel conda-forge \
    # choose the python packages you need
    'jupytext==1.13.0' \
    'python-slugify[unidecode]==5.0.2' \
    'voila>=0.3.4' \
    && conda clean --all -f -y \
    && pip install --quiet --no-cache-dir gradio

# Build and execute JupyterLab
RUN \
    # Install JupyterLab extensions
    # jupyter labextension install ... --no-build \
    jupyter lab build --LabApp.token='' -y \
    && jupyter lab clean -y \
    && rm -rf "/home/${NB_USER}/.cache/yarn" \
    && rm -rf "/home/${NB_USER}/.node-gyp" \
    && rm -rf "/home/${NB_USER}/work/" \
    && fix-permissions "${CONDA_DIR}" \
    && fix-permissions "/home/${NB_USER}"