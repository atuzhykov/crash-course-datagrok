class AtuzhykovSequencePackageDetectors extends DG.Package {

    //tags: semTypeDetector
    //input: column col
    //output: string semType
    detectDNANucleotides(col) {
        function isDNA(sequence) {
            return sequence.replace(/[^ATGC]/g, '').length == sequence.length;
          }
          
        for (var i = 0; i < col.categories.length; i++) {

            if (!isDNA(col.categories[i])) { console.log("At least one sequence is not DNA"); return null;}}

        col.semType = 'dna_nucleotide';
        console.log("Sem type dna_nucleotide was assigned");

        return col.semType;
    }
}
