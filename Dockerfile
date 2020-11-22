FROM node:12.19.0 as angularapp
RUN mkdir -p /app/src
WORKDIR /app/src
COPY package.json .
RUN npm install && npm install gulp -g
COPY . /app/src
EXPOSE 3000
CMD ["gulp"]

# ENV NODE_ENV=production
# ENV PORT=3000
# COPY package.json package.json
# COPY . /var/www
# WORKDIR /var/www
# RUN npm install && npm install gulp -g
# RUN cd /var/www/ && gulp default

# FROM nginx:alphine
# VOLUME [ "/var/cache/nginx" ]
# COPY nginx/default.conf /etc/nginx/conf.d/
# COPY --from=angularapp /var/www/dist /usr/share/nginx/html
