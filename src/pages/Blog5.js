import '../App.css';

function Blog5() {
    return (
        <div className="right-div blog_1">
            <h1>Tailwind Finally Won Me Over</h1>
            <p>
                i'll admit it, i used to think tailwind was just a bunch of class names crammed into HTML. every time i saw flex items-center justify-between px-6 py-4, i wondered how anyone could read it without getting a headache. i didn't get the hype.
            </p>
            <p>
                then i actually built something with it.
            </p>
            <p>
                somewhere along the way, i stopped thinking about CSS files altogether. instead of jumping between components and stylesheets, everything stayed in one place. i could tweak spacing, colors, typography and layouts without breaking my flow. it felt less like writing CSS and more like shaping the interface as i imagined it.
            </p>
            <p>
                what surprised me the most wasn't how fast i could build, it was how consistent everything became. once i settled on a few spacing values and colors, the entire project started to feel connected. i wasn't constantly wondering which stylesheet a class lived in or whether changing one selector would accidentally affect something else.
            </p>
            <p>
                that doesn't mean tailwind is perfect. yes, the class names can get long, and yes, the first few days felt overwhelming. but after a while, those utility classes started feeling familiar, almost like a second vocabulary. i spent less time naming CSS classes and more time solving actual problems.
            </p>
            <p>
                paired with next.js and prisma, tailwind finally made sense to me. next.js handles the structure, prisma takes care of the data, and tailwind lets me focus on making everything look and feel right. each tool has its own job, and together they make building surprisingly enjoyable.
            </p>
            <p>
                i'm still only about seventy percent through my current project, but one thing has already changed: i don't reach for a CSS file first anymore. turns out, tailwind finally won me over.
            </p>
        </div>
    );
}

export default Blog5;
