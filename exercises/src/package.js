/* Do not change these import lines. Datagrok will import API library in exactly the same manner */
import * as grok from 'datagrok-api/grok';
import * as ui from 'datagrok-api/ui';
import * as DG from 'datagrok-api/dg';

export let _package = new DG.Package();

//name: test
//input: string s
export function test(s) {
  grok.shell.info(_package.webRoot);
}


function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

function isDNA(sequence) {
  return sequence.replace(/[^ATGC]/g, '').length == sequence.length;
}


//name: Complement
//description: takes a nucleotide string and returns its complement: A<=>T, G<=>C
//tags: panel
//input: string sequence {semType: dna_nucleotide}
//output: string out {semType: dna_nucleotide}
export function complement(sequence) {

  if (isDNA(sequence)) {

    var rule = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G' };

    for (var i = 0; i < sequence.length; i++) {
      sequence = setCharAt(sequence, i, rule[sequence.charAt(i)]);
    }

    return sequence

  }

  return 'Not a DNA!'
}

//name: getOrders
//output: dataframe df
export async function getOrders() {
   let queryName = 'ordersByCountry'
   let packageName = 'Exercises'
  return await grok.data.query(`${packageName}:${queryName}`, { country: 'USA'});
}
  
  

