from enum import Flag, auto

class Time(Flag):
    Unknown = 0
    Day = auto()
    Night = auto()
