#! /bin/bash

for example_name in ./examples/*.js
do
    dynoffice "$example_name" > "$example_name.html"
done
