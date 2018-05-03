# Goal-Oriented-Representation-of-Scientific-Papers
Goal-Oriented Representation of Scientific Papers - dataset


This repository contains the dataset described in: Goal-Oriented Representation of Scientific Papers.

Annotation was done for three domains. Each folder contains the following file types:

	- *.ann files: annotation files in [BRAT format](http://brat.nlplab.org/standoff.html)
	- *.txt files: the text on which the annotations where made.
	- *.json files: annotation files in json format (monogodb dumps).
	
There are two types of annotations:

	- Paper-based : summarization, and machine translation folders
	- Abstract-based: matching
	

The maps of all the annotations are found under maps, and have the same name as that of the txt/ann file.

It should be noted that the dataset was successfully converted to BRAT's format with the exception of CONTRIBUTE-TO relations between two QUALITIEs, and TASKs with no explicit representation in the text.
