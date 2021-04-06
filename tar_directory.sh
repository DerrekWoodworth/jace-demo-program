#!/bin/bash


# Store project name
CWD=${PWD##*/}

# Pop up a level
cd ..

tar --exclude='.git' -cvf $CWD.tar $CWD

mv $CWD.tar $CWD

cd $CWD
