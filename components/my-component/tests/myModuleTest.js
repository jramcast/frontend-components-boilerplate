/* eslint-env node, mocha */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-statements */
/* eslint-disable import/no-extraneous-dependencies */

import chai from 'chai';
import sinon from 'sinon';
import myModule from '../js/myModule';


chai.should();


describe('my-component: myModule ', () => {

    beforeEach(mockBrowser);

    afterEach(cleanBrowser);

    it('getRandomColor() returns a color', () => {
        document.getElementsByClassName = sinon.spy();
        const color = myModule.getRandomColor();
        color.should.match(/rgb\(\d+, \d+, \d+\)/);
    });

});

/**
 * Creates global mock browser variables
 */
function mockBrowser() {
    const window = { document: {} };
    global.window = window;
    global.document = window.document;
}

/**
 * Cleans up global mock browser variables
 */
function cleanBrowser() {
    delete global.window;
    delete global.document;
}
