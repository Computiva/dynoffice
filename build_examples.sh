#! /bin/bash

for example_name in ./examples/*.js
do
    dynoffice "$example_name" --images images/ > "$example_name.html"
done
