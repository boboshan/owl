---
title: "Syntax Highlighting Test"
date: 2019-02-17
author: "J"
tags: ["code", "syntax highlighting", "test",]
TOC: false
---

## An Example

```python

class ParkingSolver:

    def __init__(self, siteWidth):
        self.size = 0
        self.carParkNum = 0
        self.result = []
        self.siteWidth = siteWidth

    def solve(self):
        c = CarPark()
        r = Road()
        cWidth = CarPark.width
        rWidth = Road.width
        branchC = [0, 0]
        branchR = [0, 0]

        startC = self.growNode(None, c, branchC)
        startR = self.growNode(None, r, branchR)
        print(branchC)
        self.grow(startC, branchC)
        self.grow(startR, branchR)
        return self.result

    def growNode(self, node, newNode, branch):

        if node is not None:

            # if isinstance(node, CarPark) and isinstance(newNode, Road):
            #     print(node)
            #     print(newNode)
            #     node.connectedToRoad = True
            if isinstance(node, Road) and isinstance(newNode, CarPark):
                newNode.connectedToRoad = True

        newNode.prev = node

        if isinstance(newNode, CarPark):
            branch[1] += CarPark.width
            branch[0] += 1
            branch.append("C")
        elif isinstance(newNode, Road):
            branch[1] += Road.width
            branch.append("R")

        return newNode

    def grow(self, node, branch):
        # base case
        if branch[1] > self.siteWidth - CarPark.width:
            if isinstance(node, CarPark) and isinstance(node.prev, CarPark):
                return

            self.result.append(branch)
            return

        if isinstance(node, CarPark):
            if not node.isConnected():
                r = Road()
                newBranch = copy.deepcopy(branch)
                newNode = self.growNode(node, r, newBranch)
                self.grow(newNode, newBranch)
            else:
                c = CarPark()
                r = Road()
                newBranch = copy.deepcopy(branch)
                newNode = self.growNode(node, c, newBranch)
                self.grow(newNode, newBranch)

                newBranch = copy.deepcopy(branch)
                newNode = self.growNode(node, r, newBranch)
                self.grow(newNode, newBranch)

        elif isinstance(node, Road):
            c = CarPark()
            newBranch = copy.deepcopy(branch)
            newNode = self.growNode(node, c, newBranch)
            self.grow(newNode, newBranch)
```
