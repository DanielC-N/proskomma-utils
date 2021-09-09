const parserConstants = {
    usfm: {
        baseSequenceTypes: {
            main: '1',
            introduction: '*',
            introTitle: '?',
            introEndTitle: '?',
            title: '?',
            endTitle: '?',
            heading: '*',
            header: '*',
            remark: '*',
            sidebar: '*',
            table: '*',
            tree: '*',
            treeContent: '*',
        },
        inlineSequenceTypes: {
            footnote: '*',
            noteCaller: '*',
            xref: '*',
            pubNumber: '*',
            altNumber: '*',
            esbCat: '*',
            fig: '*',
            temp: '?',
        }
    }
}

module.exports = parserConstants;
