let viruses: string[] = ["COVID", "Measles", "SARS", "H1N1"];


const clone = (q: string[], n: number) => {

    console.log("Step 0 - " + q[0])
    for (let i =0; i<n; i++){
        let virus: string = q.shift() as string;
        let dup = virus;
        q.push(virus);
        q.push(dup);

        console.log("Step "+ (i+1)+ " - " + q[0])
    }
}

clone(viruses, 15)
console.log(viruses);

