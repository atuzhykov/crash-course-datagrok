class AtuzhykovSequencePackageDetectors extends DG.Package {

    //tags: semTypeDetector
    //input: column col
    //output: string semType
    detectDNANucleotides(col) {
        function isDNA(sequence) {
            return sequence.replace(/[^ATGC]/g, '').length == sequence.length;
          }
          
        for (var i = 0; i < col.categories.length; i++) {

            if (!isDNA(col.categories[i])) {return null;}}

        col.semType = 'dna_nucleotide';
        
        return col.semType;
    }
}
