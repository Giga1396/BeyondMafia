# BeyondMafia Backend 

BeyondMafia Backend is built on Django REST Framework.

## Requirements

- [Python 3.6+](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/)
- [pipenv](https://pipenv.pypa.io/en/latest/install/)

Verify:
```console
$ python --version
Python 3.9.7 
```
```console
$ pip --version
pip 21.2.4
```
## Usage (first time)

1. Clone this repository.
```console
$ git clone https://github.com/Giga1396/BeyondMafia.git
```
2. Navigate to the bm-backend directory.
```console
$ cd BeyondMafia/bm-backend
```
3. Create a virtualenv for this project.
```console
$ pipenv shell
```
4. Install all dependencies.
```console
$ pipenv install
```
5. Generate a secret key for yourself (**do not share this!**)
```console
$ python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```
6. Create a file named `.env` in `bm-backend` and add your secret key:
```bash
SECRET_KEY = '50-character-string-you-just-generated'
```
7. Run the server.
```console
$ python manage.py runserver
```

## Usage (after initial setup)
1. Pull changes from the repository.
```console
$ git pull
```
2. Enter your virtualenv.
```console
$ pipenv shell
```
3. If the Pipfile has been modified, update your dependencies.
```console
$ pipenv install
```
4. Run the server.
```console
$ python manage.py runserver
```