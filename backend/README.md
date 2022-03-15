<p align="center">
  <img src="https://img.shields.io/badge/Author-c0mrade-cyan?style=flat-square">
  <img src="https://img.shields.io/badge/Open%20Source-Yes-cyan?style=flat-square">
  <img src="https://img.shields.io/badge/Written%20In-python-cyan?style=flat-square">
</p>


# clone this repo 
```
git clone https://github.com/ShairbekovBakyt/DRF_Shop
```
# you need to open repo directory
```
cd DRF_Shop
```
# install requirements.txt
```
pip install -r requirements.txt
```
# makemigrations && migrate
```
python3 manage.py makemigrations
python3 manage.py migrate
```
# create super user 
```
python3 manage.py createsuperuser
```
# generate token for user
```
python3 manage.py drf_create_token name_of_super_user
```
# Run test
```
python3 manage.py test
```
# Run server
```
python3 manage.py runserver
```

# Run with Docker 
   ```
   docker-compose build
   ```

   ```
   docker-compose up
   ```
