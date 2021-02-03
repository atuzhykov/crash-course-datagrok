#name: Amino acids counting task
#language: python
#tags: demo, viewers, hide-suggestions
#input: dataframe t
#input: column x {semType: nucleotides}
#output: graphics

import numpy as np
import matplotlib.pyplot as plt

sequences ="".join(t[x].values)
offsets = [0,1,2]
acids = []
for offset in offsets:
	ofsetted_sequences = sequences[offset:]   
	acids += [ofsetted_sequences[i:i+3] for i in range(0, len(ofsetted_sequences), 3)]

      



plt.hist(acids)  
plt.ylabel('Freq')
plt.xlabel('Acid');
plt.show()
