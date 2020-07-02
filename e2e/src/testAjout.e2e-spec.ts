import {testAjoutPage} from './testAjout.po';
import {browser, by, element, logging} from 'protractor';


describe(`Test de l'ajout d'ordinateur`, () => {
  let page: testAjoutPage;
  let nbLineInit: number;

  beforeEach(() => {
    page = new testAjoutPage();
    browser.get('/computers')
  });

  it(`L'utilisateur peut ajouter un ordinateur`, () => {

    //console.log( 'test de mon e2e');


    // ** je compte le nombre de lignes de mon tableau d'ordinateurs **
    element.all(by.className('lineComputer')).then(totalRows =>{
      nbLineInit = totalRows.length;
      page.nap();
      // console.log(`comptage effectué: ${nbLineInit}`);


    });

    // ** je clic sur mon lien d'ajout d'ordinateur **
    element.all(by.id("buttonAddComputer")).first().click();
    expect(browser.driver.getCurrentUrl()).toContain('computers/add');

    // ** je remplis le formulaire **
    page.completeForm();
    page.nap();
    element.all(by.id('submitFormComputer')).click();
    expect(browser.driver.getCurrentUrl()).toContain('/computers');
    page.nap();
    // console.log(`validation formulaire réussie`);




    // ** je recompte mon tableau pour vérifier l'ajout  **
    element.all(by.className('lineComputer')).then(totalRows =>{
      nbLineInit += 1;
      expect(totalRows.length).toEqual(nbLineInit);
      // console.log(`égalité parfaite: ${totalRows.length} = ${nbLineInit}`);

      page.sleep()
    });



  });




});

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

