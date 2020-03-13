export default class FormPersister {
  constructor(formId = null, throttlePeriod = 1000) {
    this.formId = formId;
    this.throttlePeriod = throttlePeriod;
    this.canSave = true;
    this.values = null;
  }

  setFormId(formId) {
    this.formId = formId;
  }

  saveValues(values) {
    this.values = values;
    if (this.canSave && this.formId) {
      this.canSave = false;
      window.localStorage.setItem(this.formId, JSON.stringify(this.values));
      setTimeout(() => {
        this.canSave = true;
        window.localStorage.setItem(this.formId, JSON.stringify(this.values));
      }, this.throttlePeriod);
    }
  }

  loadValues() {
    if (this.formId) {
      const itemFromStorage = window.localStorage.getItem(this.formId);
      return JSON.parse(itemFromStorage);
    }
    return null;
  }

  clearValues() {
    if (this.formId) {
      window.localStorage.removeItem(this.formId);
    }
  }
}
