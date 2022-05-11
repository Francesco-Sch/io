# IO - AN AI framework for designers

Different approaches and attempts to customize Jupyter Notebooks and the Jupyter Lab Interface to make it more usable for aspiring designers.

## Notebooks

- [First notebook](./src/notebooks/first-notebook.ipynb)
- [Notebook with custom widget](./src/notebooks/custom-widget.ipynb)
  - This custom widget only works in the classical notebooks
  - You can find the widget in this [notebook](./src/widgets/QuoteWidget.ipynb)
- [Notebook with custom svelte widget](./src/notebooks/custom-svelte-widget.ipynb)
  - You can find the svelte widget [here](./src/widgets/svelte-widget/)
- [Notebook with vue template as widget](./src/notebooks/render-vue-template.ipynb) 

## Development enviroment

To start the development enviroment use

```bash
docker compose up
```

To rebuild the docker image use

```bash
docker compose up --build
```
