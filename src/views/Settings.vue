<template>
  <div class="settings-page" v-if="currentUser">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Settings</h1>
          <McvValidationErrors
            v-if="validationErrors"
            :validationErrors="validationErrors"
          />
          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="URL of profile image"
                />
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Username"
                />
              </fieldset>

              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Email"
                />
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  placeholder="New password"
                />
              </fieldset>
              <button
                type="submit"
                class="btn btn-lg btn-primary pull-xs-right"
                :disabled="isSubmitting"
              >
                Update settings
              </button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" type="text">
            Or cick here to logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { getterTypes as authGetterTypes } from '@/store/modules/auth';
import McvValidationErrors from '@/components/ValidationErrors';

  export default {
    name: 'McvSettings',
    components: {
      McvValidationErrors
    },
    computed: {
      ...mapState({
        isSubmitting: state => state.settings.isSubmitting,
        validationErrors: state => state.settings.validationErrors
      }),
      ...mapGetters({
        currentUser: authGetterTypes.currentUser
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>