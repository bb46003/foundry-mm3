export class JurnalThemeDialog extends foundry.applications.api.ApplicationV2 {
static DEFAULT_OPTIONS = {
    actions: {
      applyTheme: JurnalThemeDialog.#applyTheme,
    },
    position: {
      width: 550,
      height: "auto",
    },
    template: "systems/mutants-and-masterminds-3e/templates/dialog/jurma-theme.hbs",
    window: { title: "MM3.JURNAL.title" },
  };

  async _renderHTML() {
    let html;
    const path = this.options.template;
    const data = {theme: CONFIG.MM3.sheetTheme} 
    if (game.release.generation > 12) {
      html = foundry.applications.handlebars.renderTemplate(path, data);
    } else {
      html = renderTemplate(path, data);
    }
    return html;
  }

  async _replaceHTML(result, html) {
    html.innerHTML = result;
  }

  static async #applyTheme() {
    console.log(this)
    const jurnalUuid = this.options.uuid;
    const jurnalEntry = await fromUuid(jurnalUuid);
    console.log(jurnalEntry)
  } 

}