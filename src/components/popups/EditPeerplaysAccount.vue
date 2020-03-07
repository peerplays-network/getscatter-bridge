<template>
  <section class="edit-network-account transfer">
    <section class="popup-content">
      <section class="head">
        <section class="texts" v-if="importPPY">
          <figure class="title">Import Peerplays</figure>
          <figure class="sub-title">
            Enter your Peerplays account credentials to import it into Scatter.
          </figure>
        </section>

        <section class="texts" v-if="createPPY">
          <figure class="title">Register a new Peerplays Account</figure>
          <figure class="sub-title">
            Enter an account name and re-enter the provided password to create and import a new
            Peerplays account.
          </figure>
        </section>

        <section v-if="!importPPY && !createPPY">
          <section class="texts" v-if="!addingNewKey">
            <figure class="title">Select account</figure>
            <figure class="sub-title">
              In simple mode you can only use a single account per network. Please select your
              preferred account.
            </figure>
          </section>

          <section v-if="addingNewKey">
            <section class="texts" v-if="!importingHardware">
              <figure class="title">Import account</figure>
              <figure class="sub-title">
                Blockchain accounts are linked to
                <strong>private keys</strong>. If you have a private key, you can import it from
                text or a hardware wallet below.
              </figure>
            </section>
            <section class="texts" v-if="importingHardware">
              <figure class="title">Import from hardware</figure>
              <figure class="sub-title">
                The safest way to utilize your private keys is using a hardware wallet. Plug in your
                hardware wallet now if you haven't already done so.
              </figure>
            </section>
          </section>

          <figure class="action">
            <figure class="bubble" @click="toggleAddingKey" :class="{ active: addingNewKey }">
              <em class="fa fa-plus"></em>
            </figure>
          </figure>
        </section>
      </section>

      <!-- Peerplays Form -->
      <section class="new-key" v-if="addingNewKey">
        <section v-if="!importingHardware">
          <Button
            text="Login to Import Peerplays Account"
            style="margin-bottom:5px;"
            primary="1"
            @click.native="toggleImportPPY"
          />
          <Button
            text="Create New Peerplays Account"
            style="margin-bottom:5px;"
            primary="1"
            @click.native="toggleCreatePPY"
          />
          <!-- <ImportHardware
            v-if="importingHardware"
            :blockchain="network.blockchain"
            v-on:imported="importedHardware"
          /> -->
        </section>

        <!-- <ImportHardware
          v-if="importingHardware"
          :blockchain="network.blockchain"
          v-on:imported="importedHardware"
        /> -->
      </section>
      <section class="new-key" v-if="importPPY">
        <Input
          :disabled="loadingKey"
          label="Account Name"
          :text="login.username"
          v-on:changed="x => (login.username = x)"
          style="margin-bottom:0;"
        />
        <br />
        <Input
          :disabled="loadingKey"
          label="Password"
          :text="login.password"
          v-on:changed="x => (login.password = x)"
          style="margin-bottom:0;"
        />
        <br />
        <Button text="Login" style="margin-bottom:5px;" primary="1" @click.native="loginToImport" />
      </section>

      <section class="new-key" v-else-if="createPPY">
        <Input
          :disabled="processingRegister"
          label="Account Name"
          :text="register.username"
          v-on:changed="x => (register.username = x.toLowerCase())"
          style="margin-bottom:0;"
        />
        <br />
        <span style="display:flex; align-items:flex-end">
          <Input
            :disabled="true"
            v-model="register.password"
            label="Password"
            :text="register.password"
            style="margin-bottom:0;"
          />
          <Button text="COPY" style="width:16%" primary="2" @click.native="copyToClipboard" />
        </span>
        <br />
        <Input
          :disabled="processingRegister"
          label="Re-enter Password"
          :text="register.verifyPassword"
          v-on:changed="x => (register.verifyPassword = x)"
          style="margin-bottom:0;"
        />
        <br />
        <section class="texts">
          <figure class="warning">
            IF YOU LOSE YOUR PEERPLAYS PASSWORD AND ACCESS TO YOUR SCATTER WALLET, YOU WILL LOSE ALL
            OF YOUR FUNDS!
          </figure>
          <br />
          <figure class="sub-warning">
            To download a text file of your Peerplays password, click the button:
          </figure>
        </section>
        <br />
        <Button
          text="Download Recovery File"
          style="margin-bottom:5px;"
          primary="1"
          @click.native="downloadRecoveryFile"
        />
        <br />
        <Button
          :disabled="processingRegister"
          text="Create"
          style="margin-bottom:5px;"
          primary="1"
          @click.native="registerUser"
        />
      </section>

      <section v-else-if="!addingNewKey">
        <section v-if="keys.length && publicKeys.length">
          <section class="search">
            <em class="fa fa-search"></em>
            <input v-model="terms" />
          </section>

          <section class="scroller">
            <section class="keys">
              <section class="key" :key="item.id" v-for="item in keys">
                <figure class="public-key" :key="pub.id" v-for="pub in publicKeys">
                  {{pub}}
                  <!-- {{ item.publicKeys.find(y => y.blockchain === network.blockchain) !== undefined && item.publicKeys.find(y => y.blockchain === network.blockchain).key }} -->
                </figure>

                <!-- <section class="actions">
                  <Button v-if="!key.external" icon="fa fa-key" @click.native="exportKey(key)" />
                  <Button
                    v-if="!isAccountlessChain"
                    icon="fa fa-sync-alt"
                    :loading="loadingAccounts[key.unique()]"
                    @click.native="refreshAccounts(key)"
                  />
                  <Button icon="fa fa-trash" @click.native="removeKey(key)" />
                </section> -->

                <!-- <section class="accounts">
                  <Button
                    @click.native="select(account)"
                    :key="_account.unique()"
                    v-for="_account in keyAccounts(_key)"
                    :text="isAccountlessChain ? 'Use this address' : account.sendable()"
                    :primary="isCurrentlySelected(account)"
                  />
                </section> -->
              </section>
            </section>
          </section>
        </section>

        <section v-else class="no-keys">
          <img src="static/assets/identity.svg" alt />
          <p>You have no keys imported</p>
        </section>
      </section>
    </section>

    <section class="popup-buttons">
      <Button @click.native="() => closer(null)" text="Cancel" />
    </section>
  </section>
</template>

<script>
import '../../styles/transfers.scss';
import SingularAccounts from '../../services/utility/SingularAccounts';
import { mapActions, mapState } from 'vuex';
import * as Actions from '@walletpack/core/store/constants';
import BalanceService from '@walletpack/core/services/blockchain/BalanceService';
import Popups from '../../util/Popups';
import PopupService from '../../services/utility/PopupService';
import Account from '@walletpack/core/models/Account';
import Keypair from '@walletpack/core/models/Keypair';
import KeyPairService from '@walletpack/core/services/secure/KeyPairService';
import AccountService from '@walletpack/core/services/blockchain/AccountService';
import PluginRepository from '@walletpack/core/plugins/PluginRepository';
import KeyService from '../../services/utility/KeyService';
import RandomString from 'randomstring';
import copy from 'copy-to-clipboard';
import FileSaver from 'file-saver';

export default {
  props: ['popin', 'closer'],
  components: {
    ImportHardware: () => import('./importable/ImportHardware'),
  },

  data() {
    return {
      importingHardware: false,
      canUseHardware: false,

      addingNewKey: false,
      importPPY: false,
      createPPY: false,

      terms: '',
      privateKey: '',

      loadingKey: false,
      processingRegister: false,
      loadingAccounts: {},
      login: {
        username: '',
        password: '',
      },
      register: {
        username: '',
        password: RandomString.generate({
          length: 52,
          charset: 'alphanumeric',
        }),
        verifyPassword: '',
      },

      accounts: {}
    };
  },
  created() {
    this.keys && this.keys.map(keypair => this.loadAccounts(keypair));

    if (this.importing) {
      this.addingNewKey = true;
    }

    // if (this.keys) {
    //   var t = this.keys.filter(x => {
    //       return x.blockchains.find(x => x === 'ppy')
    //   });
    //   this.publicKeys = t;
    // }

    window.wallet
      .hardwareTypes()
      .then(x => (this.canUseHardware = !!x.length))
      .catch(() => (this.canUseHardware = false));
  },
  computed: {
    ...mapState(['scatter']),
    isAccountlessChain() {
      return !PluginRepository.plugin(this.network.blockchain).accountsAreImported();
    },
    network() {
      return this.popin.data.props.network;
    },
    importing() {
      return this.popin.data.props.importing;
    },
    keys() {
      const keys = this.scatter.keychain.keypairs.filter(
        kp => kp.blockchains[0] === this.network.blockchain
      );
      return keys;
    },
    publicKeys() {
      // return this.keys.forEach(kp => ).publicKeys.find(x => x.blockchain === network.blockchain).key
      // const pubKeys = this.keys.filter(x => {
      //     return x.publicKeys.find(x => x.blockchains === 'ppy')
      // });

      // console.log(pubKeys)
      // return pubKeys.key;
      //item.publicKeys.find(y => y.blockchain === network.blockchain) !== undefined && item.publicKeys.find(y => y.blockchain === network.blockchain).key
      let availablePubs = [];
      this.keys.forEach(kp => {
        let pub = kp.publicKeys.find(y => y.blockchain === this.network.blockchain);

        console.log(`pub ${JSON.stringify(pub)}`)
        if (pub !== undefined) {
          availablePubs.push(pub.key);
        }

      });

      console.log(`availablePubs ${availablePubs}`)
      return availablePubs;
    },
    currentlySelected() {
      return SingularAccounts.accounts([this.network])[0];
    },
  },
  methods: {
    async loadAccounts(keypair) {
      // console.log(`keypair: ${JSON.stringify(keypair)}`)
      const loadedAccount = SingularAccounts.accounts([this.network])[0];
      const accounts = await AccountService.getAccountsFor(keypair, this.network);

      if (loadedAccount && !accounts.find(x => x.unique() === loadedAccount.unique())) {
        accounts.unshift(loadedAccount);
      }

      this.accounts[keypair.unique()] = accounts;

      if (!SingularAccounts.accounts([this.network]).length && accounts && account.length) {
        SingularAccounts.setPredefinedAccount(this.network, accounts[0]);
      }

      this.$forceUpdate();
    },
    async importedHardware(keypair) {
      if (keypair.isUnique()) {
        await KeyPairService.saveKeyPair(keypair);
        await this.loadAccounts(keypair);
        this.importingHardware = false;
        this.loadingKey = false;
        this.addingNewKey = false;
      }
    },
    toggleAddingKey() {
      this.addingNewKey = !this.addingNewKey;
      this.importingHardware = false;
    },

    toggleImportPPY() {
      this.importPPY = !this.importPPY;
      this.importingHardware = false;
      this.addingNewKey = false;
      // this.clearLoginData();
    },

    toggleCreatePPY() {
      this.createPPY = !this.createPPY;
      this.importingHardware = false;
      this.addingNewKey = false;
      this.clearRegisterData();
    },

    validateUsername(username) {
      let err = PluginRepository.plugin(this.network.blockchain).isAccountNameError(username);
      if (err) {
        PopupService.push(Popups.snackbar(err));
        return false;
      }

      return true;
    },

    copyToClipboard() {
      copy(this.register.password);
      PopupService.push(Popups.snackbar('Copied!'));
    },

    downloadRecoveryFile() {
      let blob = new Blob([this.register.password], {
        type: 'text/plain;charset=utf-8',
      });
      FileSaver(blob, 'account-recovery-password.txt');
    },

    async registerUser() {
      // Ensure the password has been re-entered.
      if (this.register.password !== this.register.verifyPassword) {
        return PopupService.push(Popups.snackbar('The passwords do not match.'));
      }

      this.processingRegister = true;

      // Validate the username using the peerplaysjs-lib.
      const validUser = this.validateUsername(this.register.username);
      if (!validUser) {
        this.processingRegister = false;
        return;
      }

      let result = await KeyService.registerPPY(this.register.username, this.register.password);

      if (result.error) {
        this.processingRegister = false;
        return PopupService.push(Popups.snackbar('The account already exists.'));
      }

      // Save KeyPair
      let keypair = await KeyService.generatePPYKeys(
        this.register.username,
        this.register.password
      );
      if (!keypair) {
        this.processingRegister = false;
        return PopupService.push(Popups.snackbar('Account authentication failed.'));
      }
      keypair.setName();
      keypair.username = this.register.username;
      await KeyPairService.saveKeyPair(keypair);
      console.log(`registered and saved kp: ${keypair}`)
      await this.loadAccounts(keypair);
      this.processingRegister = false;

      // Close
      this.toggleCreatePPY();
    },

    clearLoginData() {
      this.login = {
        username: '',
        password: '',
      };
    },

    clearRegisterData() {
      this.register = {
        username: '',
        password: RandomString.generate({
          length: 52,
          charset: 'alphanumeric',
        }),
        verifyPassword: '',
      };
    },

    async loginToImport() {
      // let MAX_PASSWORD_CHARACTERS = 22;
      if (!this.login.username || !this.login.password || this.login.password.length < 22) {
        return PopupService.push(Popups.snackbar('Invalid username or password.'));
      }
      let user = this.login.username;
      let pass = this.login.password;

      let auth = await KeyService.authPPY(user, pass);
      if (!auth) {
        return PopupService.push(Popups.snackbar('Account authentication failed.'));
      }
      let keypair = await KeyService.generatePPYKeys(user, pass);
      if (!keypair) {
        return PopupService.push(Popups.snackbar('Account authentication failed.'));
      }
      keypair.setName();
      keypair.username = user;
      console.log(`keypairkeypair: ${JSON.stringify(keypair)}`)
      await KeyPairService.saveKeyPair(keypair);
      console.log(`keypair saved!!`)
      await this.loadAccounts(keypair);
      this.toggleImportPPY();
    },

    isCurrentlySelected(account) {
      if (!this.currentlySelected) return false;
      return this.currentlySelected.identifiable() === account.identifiable();
    },
    async exportKey(keypair, bypassPassword = false) {
      const unlocked = bypassPassword
        ? true
        : await new Promise(r => {
            PopupService.push(
              Popups.getPassword(async password => {
                if (!password) return r(false);
                if (window.wallet)
                  r(await window.wallet.verifyPassword(password).catch(() => false));
              })
            );
          });

      if (unlocked) {
        PopupService.push(Popups.exportPrivateKey(keypair));
      }
    },
    removeKey(keypair) {
      PopupService.push(
        Popups.confirmDeleteKeypair(confirmed => {
          if (!confirmed) return;
          KeyPairService.removeKeyPair(keypair);
        })
      );
    },
    refreshAccounts(keypair) {
      if (this.loadingAccounts[keypair.unique()]) return;

      this.loadingAccounts[keypair.unique()] = true;
      this.$forceUpdate();
      setTimeout(() => {
        delete this.loadingAccounts[keypair.unique()];
        this.$forceUpdate();
      }, 1000);
    },
    keyAccounts(keypair) {
      if (!this.accounts[keypair.unique()]) return [];

      return this.accounts[keypair.unique()].filter(x => {
        if (x.name === keypair.username) return x;
      });
    },
    addHardware() {
      // TODO: Need to add hardware importing
    },
    async select(account) {
      const oldAccounts = this.network.accounts();
      if (oldAccounts.length) await AccountService.removeAccounts(oldAccounts);
      await AccountService.addAccount(account);
      SingularAccounts.setPredefinedAccount(this.network, account);
      BalanceService.loadBalancesFor(account);
      this.closer(true);
    },
    ...mapActions([Actions.SET_BALANCES, Actions.REMOVE_BALANCES]),
  },
};
</script>

<style lang="scss">
@import '../../styles/variables';

.edit-network-account {
  max-width: 500px;
  width: calc(100% - 80px);
  margin: 0 auto;

  .popup-content {
    padding: 0;
  }

  .no-keys {
    padding: 20px 0;

    img {
      width: 180px;
      height: auto;
    }

    p {
      color: $grey;
      font-size: $font-size-small;
      font-weight: bold;
    }
  }

  .new-key {
    padding: 20px;

    button {
      width: 100%;
    }
  }

  .warning {
    font-size: $font-size-medium;
    font-weight: bold;
    margin: 0;
  }

  .sub-warning {
    font-size: $font-size-small;
    font-weight: bold;
    margin: 0;
  }

  .head {
    padding: 20px;
    text-align: left;
    border-bottom: 1px solid $borderlight;

    .texts {
      max-width: calc(100% - 80px);

      .title {
        font-size: $font-size-medium;
        font-weight: bold;
        margin: 0;
      }

      .sub-title {
        margin-top: 0;
        font-size: $font-size-small;
      }
    }

    .action {
      position: absolute;
      top: 20px;
      right: 20px;

      .bubble {
        width: 40px;
        height: 40px;
        background: $blue;
        color: white;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;

        transition: transform 0.2s ease;

        &:hover {
          transform: scale(1.1);
        }
        &:active {
          transform: scale(0.9);
        }

        &.active {
          transform: rotateZ(45deg);

          &:hover {
            transform: rotateZ(45deg) scale(1.1);
          }
          &:active {
            transform: rotateZ(45deg) scale(0.9);
          }
        }
      }
    }
  }

  .scroller {
    padding-bottom: 40px;
    overflow-y: auto;
    max-height: 320px;
  }

  .search {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid $borderlight;

    i {
      margin-right: 10px;
      font-size: 11px;
    }

    input {
      border: 0;
      outline: 0;
      flex: 1;
    }
  }

  .keys {
    padding: 20px;

    .key {
      text-align: left;
      padding: 10px;
      border: 3px solid $borderlight;
      border-radius: 4px;

      .public-key {
        font-size: $font-size-standard;
        word-break: break-word;
        font-weight: bold;
        color: $blue;
        margin-bottom: 10px;
      }

      .accounts {
        margin-top: 20px;

        button {
          width: 100%;
          margin-top: 5px;
        }
      }

      .actions {
        display: flex;
        justify-content: flex-end;

        button {
          padding: 10px;
          height: auto;
          margin-left: 5px;

          .icon {
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>
