#!/bin/bash
touch /tmp/walee_watch.pid
echo $$ > /tmp/walee_watch.pid
project_name=beweb
project_dir=~/Development/walee/$project_name/src/main/webapp/walee
app_root=$project_dir/be/app

be_project_dir=$project_dir/be
for dir in `ls $be_project_dir`;do 
  be_watched_dirs="$be_watched_dirs $be_project_dir/$dir/source/class"
done

core_watched_dirs=$project_dir/core/source/class

lang_watched_dirs=$project_dir/lang/source/class

watched_dirs="$core_watched_dirs $be_watched_dirs $lang_watched_dirs"

for ns in `ls $be_project_dir`;do
  class_dir=$be_project_dir/$ns/source/class/wl/be
  for f in `ls $class_dir/$ns`;do 
    if [ "$f" != "__init__.js" ];then
        rm -rf "$class_dir/$ns/$f";
    fi
  done
done

class_dir=$core_watched_dirs/wl/core
for f in `ls $class_dir`;do
  if [ "$f" != "__init__.js" ];then
    rm -rf "$class_dir/$f";
  fi
done

class_dir=$lang_watched_dirs/wl/lang
for f in `ls $class_dir`;do
  if [ "$f" != "__init__.js" ];then
    rm -rf "$class_dir/$f";
  fi
done


./lsc.sh
cd $app_root
./generate.py source

while inotifywait -r -e modify `echo $watched_dirs`; do
  ./generate.py source
done
