from abc import ABC, abstractmethod

class Action(ABC):
    @abstractmethod
    def __init__(self, source, targets = None):
        self.visit = False
        self.source = source
        self.targets = targets

    
    @abstractmethod
    def apply(self):
        pass

    def __repr__(self) -> str:
        return f"Source: {self.source.name}, Action: {self.__class__.__name__}, Target(s): {[target.name for target in self.targets]}"