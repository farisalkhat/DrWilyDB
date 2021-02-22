import csv
import os, sys
from PIL import Image
import glob
import json
from collections import OrderedDict
from pymongo import MongoClient
from os import path

client = MongoClient("mongodb+srv://Faris:Luigipoop1437yes@gamestatistics.j134f.mongodb.net/MM8BitDM?retryWrites=true&w=majority")
database = client["MM8BitDM"]
collection = database["robotmasters"]
print(client.list_database_names())



image_list = {}
for filename in glob.glob('RobotMasterImages/*.png'):
    robot_master_png = filename.split('\\')[1]
    robot_master = robot_master_png.split('.')[0]
    image_list[robot_master] = "assets\\" + filename


    

icon_list = {}
for filename in glob.glob('RobotMasterIcons/*.png'):
    rbp = filename.split('\\')[1]
    rb = rbp.split('.')[0]
    icon_list[rb] = "assets\\" + filename

data = []
with open('RobotMasters.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            #print(f'Column names are {", ".join(row)}')
            line_count += 1
        if row['robotmaster'] in icon_list.keys():
            row['icon'] = icon_list[row['robotmaster']]
        else:
            row['icon'] = ''
        
        if row['robotmaster'].upper() in image_list.keys():
            row['image'] = image_list[row['robotmaster'].upper()]
        else:
            row['image'] = ''
        
        
        Robot_Master = {
            'name':row['robotmaster'],
            'origin':row['origin'],
            'primaryclass':row['primaryclass'],
            'secondaryclass':row['secondaryclass'],
            'icon': row['icon'],
            'image': row['image'],
        }
        print(Robot_Master)
        line_count += 1
        

        collection.insert_one(Robot_Master)
