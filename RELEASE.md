# Making a new release of jupyter_mset_theme

The extension can be published to `PyPI` and `npm` manually or using the [Jupyter Releaser](https://github.com/jupyter-server/jupyter_releaser).

## Manual release

### Python package

This extension can be distributed as Python
packages. All of the Python
packaging instructions in the `pyproject.toml` file to wrap your extension in a
Python package. Before generating a package, we first need to install `build`.

```bash
pip install build twine hatch
```

Bump the version using `hatch`. By default this will create a tag.
See the docs on [hatch-nodejs-version](https://github.com/agoose77/hatch-nodejs-version#semver) for details.

```bash
hatch version <new-version>
```

Make sure to clean up all the development files before building the package:

```bash
jlpm clean:all
```

You could also clean up the local git repository:

```bash
git clean -dfX
```

To create a Python source package (`.tar.gz`) and the binary package (`.whl`) in the `dist/` directory, do:

```bash
python -m build
```

> `python setup.py sdist bdist_wheel` is deprecated and will not work for this package.

Then to upload the package to PyPI, do:

```bash
twine upload dist/*
```

### NPM package

To publish the frontend part of the extension as a NPM package, do:

```bash
npm login
npm publish --access public
```

## Automated releases with the Jupyter Releaser

This repository includes two release workflows that can be run manually from the GitHub Actions UI after changes have landed on `main`.

### Required secrets

- `PYPI_TOKEN` for publishing the Python package to PyPI, unless you switch to PyPI Trusted Publishing
- `NPM_TOKEN` for publishing the frontend package to npm, if you publish to npm

### Standard release flow

1. Merge the changes you want to release into `main`.
2. Open the Actions tab in GitHub.
3. Run `Step 1: Prep Release`.
4. Review the generated draft GitHub Release and changelog text.
5. Run `Step 2: Publish Release`.
6. Verify the published GitHub Release and uploaded assets.

### Notes

- `Step 1: Prep Release` prepares the next version, collects changelog entries from merged PRs, and creates a draft GitHub Release.
- `Step 2: Publish Release` publishes the draft GitHub Release and uploads the built distribution artifacts to the configured registries.
- If you leave the draft release URL empty during publish, Jupyter Releaser uses the most recent draft release.
- For changelog grouping, it helps to keep PR labels consistent: `bug`, `feature`, `enhancement`, `maintenance`, `documentation`.

## Publishing to `conda-forge`

If the package is not on conda forge yet, check the documentation to learn how to add it: https://conda-forge.org/docs/maintainer/adding_pkgs.html

Otherwise a bot should pick up the new version publish to PyPI, and open a new PR on the feedstock repository automatically.