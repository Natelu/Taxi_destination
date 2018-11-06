#coding = utf-8

import pandas as pd
import numpy
import json


class DataPreparation:
    def __init__(self, data_file, grid_size=1e4):
        self.Data = pd.read_csv(data_file)

    def get_pos_set(self):
        xys = self.Data['POLYLINE']
        lat_set = set()
        lon_set = set()
        for item in xys:
            item = json.loads(item)
            for pos in item:
                lat_set.add(pos[1])
                lon_set.add(pos[0])
        print(len(lat_set))  # 218671
        print(len(lon_set))  # 162051
        return lat_set, lon_set

    def get_max_or_min(self, data_set, max=True):
            return max(data_set) if max else min(data_set)

    def get_corner(self):
        '''
        :return: the list of coener postion
        '''
        lat_set, lon_set = self.get_pos_set()
        min_lat = self.get_max_or_min(data_set=lat_set, max=False)
        max_lat = self.get_max_or_min(data_set=lat_set)
        min_lon = self.get_max_or_min(data_set=lon_set, max=False)
        max_lon = self.get_max_or_min(data_set=lon_set)
        return {"min_lat": min_lat, "max_lat": max_lat, "min_lon": min_lon, "max_lon": max_lon}



if __name__=='__main__':
    DataFile = '../data/train.csv'
    data_prase = DataPreparation(DataFile, grid_size=1e4)
    corners = data_prase.get_corner()
    print(corners)