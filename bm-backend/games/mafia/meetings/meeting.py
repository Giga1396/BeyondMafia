from abc import ABC, abstractmethod
from mafia.time import Time
from collections import Counter, OrderedDict
from mafia.actions.action import Action

class Meeting(ABC):

    @abstractmethod
    def __init__(self) -> None:
        self.can_speak = True
        self.attendees = []
        self.votes = OrderedDict()
        self.time = Time.Unknown
        self.action = None

    @abstractmethod
    def valid_target(self) -> function:
        pass

    def tally_votes(self) -> Action:
        #This function currently assumes meeting actions can only have 1 target
        tally = Counter(self.votes.values()).most_common()
        target = None
        if len(tally):
            target = tally[0][0]
            if len(tally) > 1 and tally[0][1] == tally[1][1]:
                #tie
                target = None 

        if not target:
            return None
        
        #first to vote for chosen target counts as source
        source = None
        for person, vote in self.votes.items():
            if vote == target:
                source = person
                break

        return globals[self.action](source, [target])
        
            




    
