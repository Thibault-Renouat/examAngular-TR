import { browser, by, element } from 'protractor';

export class testAjoutPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  sleep() {
    browser.driver.sleep(2500);
  }
  nap() {
    browser.driver.sleep(1000);
  }


  completeForm(): void{
    let modele =element.all(by.id('modele'));
    let marque =element.all(by.id('inputRadio-Asus'));
    let type =element.all(by.name('type'));
    let categorie =element.all(by.id('inputRadio-Gaming'));
    let prixAchat =element.all(by.name('prixAchat'));
    let prixVente =element.all(by.name('prixVente'));

    modele.sendKeys('Test ajout e2e');
    marque.click();
    type.sendKeys('Fixe')
    categorie.click();
    prixAchat.sendKeys(530.76);
    prixVente.sendKeys(895);
    this.sleep();

  }



}
