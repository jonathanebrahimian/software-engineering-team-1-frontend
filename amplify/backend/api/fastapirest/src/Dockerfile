# 
FROM python:3.9

ENV AUTH_SOURCETASAB0A873B_USERPOOLID ${AUTH_SOURCETASAB0A873B_USERPOOLID}
ENV STORAGE_RESUMES_BUCKETNAME ${STORAGE_RESUMES_BUCKETNAME}
ENV STORAGE_SOURCETADB_ARN ${STORAGE_SOURCETADB_ARN}
ENV STORAGE_SOURCETADB_NAME ${STORAGE_SOURCETADB_NAME}
ENV STORAGE_SOURCETADB_STREAMARN ${STORAGE_SOURCETADB_STREAMARN}

# 
WORKDIR /code

# 
COPY ./requirements.txt /code/requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# 
COPY ./app /code/app