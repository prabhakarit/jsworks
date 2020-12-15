
function init1() {
    console.log('init1 executed');
}

function init2() {
    console.log('init2 executed');
}

function process1() {
    console.log('process1 executed');
}

function process2() {
    console.log('process2 executed');
}

function ingest1() {
    console.log('ingest1 executed');
}

function ingest2() {
    console.log('ingest2 executed');
}

function close1() {
    console.log('close1 executed');
}

function close2() {
    console.log('close2 executed');
}

function run(processor) {
    processor.init();
    processor.process();
    processor.ingest();
    processor.close();
}

class Processor {
    constructor(mode, type, profile) {
        this.mode = mode;
        this.type = type;
        this.profile = profile;
    }
};

const compose = (mode) => {
    const processor = new Processor(mode, 'address', 'batch');
    if (mode === 'normal') {
        processor.__proto__.init = init1;
        processor.__proto__.process = process1;
        processor.__proto__.ingest = ingest1;
        processor.__proto__.close = close1;
    } else {
        processor.__proto__.init = init2;
        processor.__proto__.process = process2;
        processor.__proto__.ingest = ingest2;
        processor.__proto__.close = close2;
    }
    return processor;
};

const test = (mode) => {
    const processor = compose(mode);
    run(processor);
};

test('normal');
