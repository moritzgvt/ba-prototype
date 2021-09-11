import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    severity: [
      {
        text: 'Keine Gefahr',
        class: 'danger-0'
      },
      {
        text: 'Geringe Gefahr',
        class: 'danger-1'
      },
      {
        text: 'Gefahr',
        class: 'danger-2'
      },
      {
        text: 'Hohe Gefahr',
        class: 'danger-3'
      },
      {
        text: 'Höchste Gefahr',
        class: 'danger-4'
      }
    ]
    ,
    views: {
      abdera: {
        path: require('@/assets/abdera.png'),
        states: null,
        overlay: true,
        disabled: false,
        next: 'nzz'
      },
      nzz: {
        path: require('@/assets/nzz.png'),
        states:null,
        overlay: true,
        disabled: false,
        next: 'amazon'
      },
      amazon: {
        path: require('@/assets/amazon.png'),
        states: null,
        overlay: true,
        disabled: false,
        next: 'neumann'
      },
      neumann: {
        path: require('@/assets/neumann.png'),
        states:null,
        overlay: true,
        disabled: false,
        next: 'mobile'
      },
      mobile: {
        path: require('@/assets/mobile.png'),
        states:null,
        overlay: true,
        disabled: false,
        next: null
      }
    },
    categories: [
      {
        icon: 'auto_awesome',
        title: 'Nutzerzentrierte Funktionen',
        verboseTitle: 'Ich möchte Webseiten nach meinen Vorstellungen anpassen und weitere nutzerzentrierte Funktionalität nutzen.',
        data: {
          used: ['Metadaten (Geräteinformationen, IP-Adresse, …)'],
          severity: 1
        },
        content: 'Nützliche Cookies, wenn du beispielsweise eine Website personalisieren oder auf ihr angemeldet bleiben willst.',
        state: false,
        open: false
      },
      {
        icon: 'video_library',
        title: 'Externe Inhalte',
        verboseTitle: 'Ich möchte eingebettete Inhalte, wie Instagram-Bilder oder YouTube-Videos immer sehen können.',
        data: {
          used: ['Demografische Informationen (Alter, Geschlecht, Beruf, …)', 'Aktivitätsdaten', 'Daten zu Interessen', 'Metadaten (Geräteinformationen, IP-Adresse, …)'],
          severity: 2
        },
        content: 'Zu empfehlen, wenn du häufig Inhalte, wie eingebettete Videos oder Social-Media Profile konsumierst. Aber auch eingebettete Systeme wie die Buchung eines Hotels, werden so zugelassen.',
        state: false,
        open: false
      },
      { 
        icon: 'insights',
        title: 'Statistische Auswertung',
        verboseTitle: 'Um Websitebetreiber dabei zu unterstützen Ihre Angebote zu verbessern, möchte ich Performance- und Nutzungsdaten mit Ihnen teilen.',
        data: {
          used: ['Demografische Informationen (Alter, Geschlecht, Beruf, …)', 'Aktivitätsdaten', 'Daten zu Interessen', 'Website Besuche', 'Websitenutzung', 'Metadaten (Geräteinformationen, IP-Adresse, …)', 'Standort Informationen'],
          severity: 3
        },
        content: 'Diese Cookies unterstützen den Seitenbetreiber dabei, seine Angebote noch besser zu gestalten und Produkte anzupassen. Bedenke aber, dass du dadurch viele deiner Daten preisgibst.',
        state: false,
        open: false
      },
      {
        icon: 'campaign',
        title: 'Personalisierte Werbung',
        verboseTitle: 'Ich finde es gut wenn ich auf mich zugeschnittene Inhalte und Werbung vorschlagen bekomme.',
        data: {
          used: ['Demografische Informationen (Alter, Geschlecht, Beruf, …)', 'Aktivitätsdaten', 'Daten zu Interessen', 'Website Besuche', 'Websitenutzung', 'Metadaten (Geräteinformationen, IP-Adresse, …)', 'Standort Informationen'],
          severity: 3
        },
        content: 'Wenn du gerne auf dich und deine Interessen und Vorlieben zugeschnittene Werbeanzeigen erhältst sind das die richtigen Cookies für dich. Allerdings gibts du dadurch sehr viele Daten preis, die vorwiegend dazu verwendet werden, ein Profil von dir zu erstellen.',
        state: false,
        open: false
      }
    ]
  },
  mutations: {
    toggleOpen: (state, payload) => {
      state.categories.map((cat, index) => {
        if (index === payload) {
          state.categories[payload].open = !state.categories[payload].open
        } else {
          cat.open = false;
        }
      });
    },
    toggleSelection: (state, payload) => {
      state.categories[payload].state = !state.categories[payload].state
    },
    toggleWebsiteSelection: (state, payload) => {
      if (state.views[payload.website].states === null) {
        const standardSelection = [];

        state.categories.map(cat => {
          standardSelection.push(cat.state);
        });

        state.views[payload.website].states = standardSelection;
      }

      const updateSelection = [];
      state.views[payload.website].states.map((state, index) => {
        index === payload.index
          ? updateSelection.push(!state)
          : updateSelection.push(state);
      });

      state.views[payload.website].states = updateSelection;
    },
    toggleOverlayDisabled: (state, payload) => {
      state.views[payload].disabled = !state.views[payload].disabled
    },
    toggleOverlayOpen: (state, payload) => {
      state.views[payload].overlay = !state.views[payload].overlay
    },
  }
})
