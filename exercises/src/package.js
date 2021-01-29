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



//name: Complement
//description: takes a nucleotide string and returns its complement: A<=>T, G<=>C
//input: string sequence {semType: dna_nucleotide}
//output: widget complement
//tags: panel, widgets
export function complement(sequence) {

  let map = { 'A': 'T', 'C': 'G', 'T': 'A', 'G': 'C' }, complement = '';
  for (let char of sequence) complement += map[char];
  return new DG.Widget(ui.divText(complement));
}

//name: getOrders
//output: dataframe df
export async function getOrders() {
  let queryName = 'ordersByCountry'
  let packageName = 'Exercises'
  return await grok.data.query(`${packageName}:${queryName}`, { country: 'USA' });
}



