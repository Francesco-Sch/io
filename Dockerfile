FROM python:3.9-buster

RUN apt-get update
RUN pip install --upgrade pip

# Install Jupyter
RUN pip3 install jupyter==1.0.0
RUN pip3 install ipywidgets==7.6.5
RUN pip3 install ipycanvas==0.9.1
RUN jupyter nbextension enable --py widgetsnbextension
RUN jupyter nbextension enable --py --sys-prefix ipycanvas

# Install JupyterLab
RUN pip3 install jupyterlab==3.2.4 && jupyter serverextension enable --py jupyterlab

# Install Libraries
RUN pip3 install gradio==2.8.14 \
    && pip3 install voila==0.3.4 \
    && pip3 install elyra-code-snippet-extension==3.6.1 \
    && jupyter lab build --LabApp.token='' -y \
    jupyter lab clean -y

EXPOSE 8888
RUN mkdir -p /opt/app/code
CMD jupyter lab --ip=* --port=8888 --no-browser --notebook-dir=/opt/app/code --allow-root