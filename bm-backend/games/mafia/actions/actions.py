from mafia.actions.action import Action

class Save(Action):
    def __init__(self, source, targets):
        super().__init__(source, targets=targets)
        self.visit = True
        
    def apply(self):
        for target in self.targets:
            target.role.protect()

class Hit(Action):
    def __init__(self, source, targets):
        super().__init__(source, targets=targets)
        self.visit = True
        
    def apply(self):
        for target in self.targets:
            target.role.hit()

class Exile(Action):     
    def apply(self):
        for target in self.targets:
            target.role.exile()

class Investigate(Action):

    def __init__(self, source, targets):
        super().__init__(source, targets=targets)
        self.visit = True
        
    def apply(self):
        for target in self.targets:
            self.source.role.reports.append(self.report(target))

    def report(self, target):
        return f"After investigations, you suspect that {target.name} is sided with the {target.role.alignment}."