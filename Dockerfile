# VERSION: 0.1.0
# DESCRIPTION: Basic extensible Jupyter Notebook/Lab Container
# BUILD: docker build --rm -t docker-jupyter-extensible .

FROM jupyter/scipy-notebook

# Never prompt the user for choices on installation/configuration of packages
ENV DEBIAN_FRONTEND noninteractive
ENV TERM linux

USER $NB_UID

# install Python packages you often use
RUN set -ex \
    && conda install --quiet --yes --channel conda-forge \
    # choose the python packages you need
    'jupytext==1.13.0' \
    'python-slugify[unidecode]==5.0.2' \
    'ipywidgets>=7.7.0' \
    'ipyvue>=1.7.0' \
    'ipyvuetify>=1.8.2' \
    'voila>=0.3.4' \
    && conda clean --all -f -y \
    && pip install --quiet --no-cache-dir gradio \
    # install jupyter lab extensions you need
    # jupyter labextension install ... --no-build \
    && jupyter lab build --LabApp.token='' -y \
    && jupyter lab clean -y \
    && rm -rf "/home/${NB_USER}/.cache/yarn" \
    && rm -rf "/home/${NB_USER}/.node-gyp" \
    && fix-permissions "${CONDA_DIR}" \
    && fix-permissions "/home/${NB_USER}"