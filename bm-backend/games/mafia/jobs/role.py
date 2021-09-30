from abc import ABC, abstractmethod
class Role(ABC):
    @abstractmethod
    def __init__(self):
        self.alive = True
        self.items = []
        self.day_actions = []
        self.night_actions = []
        self.meetings = ["TownMeeting"]
        self.reports = []
        self.protected = False
        self.alignment = None
        self.vote_weight = 1

    def hit(self):
        if not self.protected:
            self.alive = False

    def exile(self):
        self.alive = False

    def protect(self):
        self.protected = True

    def log_reports(self):
        #TODO add report logging
        for report in self.reports:
            #TODO log reports collected
            pass
        self.report = []

    def start_day(self):
        protected = False
        self.log_reports()

    def start_night(self):
        self.log_reports()

    def __repr__(self) -> str:
        return f'Role: {self.__class__.__name__}, Alive: {self.alive}, Alignment:{self.alignment}, Night Actions{self.night_actions}, Reports: {self.reports}, Protected: {self.protected}'