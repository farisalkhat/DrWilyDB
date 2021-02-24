import csv
import os, sys
from PIL import Image
import glob
import json
from collections import OrderedDict
from pymongo import MongoClient
from os import path

#client = MongoClient("mongodb+srv://Faris:Luigipoop1437yes@gamestatistics.j134f.mongodb.net/MM8BitDM?retryWrites=true&w=majority")
#database = client["MM8BitDM"]
#collection = database["robotmasters"]
#print(client.list_database_names())


# stage_list = []
# for filename in glob.glob('StageImages/XDM MAP PACK/*.png'):
#     stage_png = filename.split('\\')[1] #This is the image name that needs to be changed.
#     stage_path = filename.split('\\')[0] #Need original path of the image still


#     #All the images are in like this: MM1 ELECT MAN.png
#     #I want to keep the front abbreviations capitalized, but fix the format for everything else.
#     #game_title will hold the new string path
#     stage_split = stage_png.split(' ') 
#     modify_stage_split = stage_split[1:]

#     game_title = []
#     game_title.append(stage_split[0])
#     k = 0 
#     for name in modify_stage_split:
#         game_title.append(name.lower().capitalize())



#     game_title = ' '.join(game_title) #Everything is still in a list format, so we just need to merge them together. 


#     #Lastly, we take the new image name, merge it with the original stage path(minus the original stage name), 
#     #and rename. 
#     new_name = stage_path+'\\'+ game_title 
#     os.rename(filename,new_name)
    

for filename in glob.glob('StageImages/XDM MAP PACK/*.png'):
    stage_origin = filename.split('\\')[0].split('/')[1]
    stage_name = filename.split('\\')[1].split('.')[0]

    print(stage_origin)


    stage = {
        'name': stage_name,
        'origin': stage_origin,
        'image': 'assets\\'+filename
    }

    collection.insert_one(stage)




# image_list = {}
# for filename in glob.glob('RobotMasterImages/*.png'):
#     robot_master_png = filename.split('\\')[1]
#     robot_master = robot_master_png.split('.')[0]
#     image_list[robot_master] = "assets\\" + filename


    

# icon_list = {}
# for filename in glob.glob('RobotMasterIcons/*.png'):
#     rbp = filename.split('\\')[1]
#     rb = rbp.split('.')[0]
#     icon_list[rb] = "assets\\" + filename

# data = []
# with open('RobotMasters.csv', mode='r') as csv_file:
#     csv_reader = csv.DictReader(csv_file)
#     line_count = 0
#     for row in csv_reader:
#         if line_count == 0:
#             #print(f'Column names are {", ".join(row)}')
#             line_count += 1
#         if row['robotmaster'] in icon_list.keys():
#             row['icon'] = icon_list[row['robotmaster']]
#         else:
#             row['icon'] = ''
        
#         if row['robotmaster'].upper() in image_list.keys():
#             row['image'] = image_list[row['robotmaster'].upper()]
#         else:
#             row['image'] = ''
        
        
#         Robot_Master = {
#             'name':row['robotmaster'],
#             'origin':row['origin'],
#             'primaryclass':row['primaryclass'],
#             'secondaryclass':row['secondaryclass'],
#             'icon': row['icon'],
#             'image': row['image'],
#         }
#         print(Robot_Master)
#         line_count += 1
        

#         collection.insert_one(Robot_Master)
