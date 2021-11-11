// import { loadRecords, createRecord, deleteRecord } from "@/services/model";
// import { mapGetters } from "vuex";
// mapGetters("Contact", ["ContactGetter"])
export default {
    saymembers(idd) {
      return this.contacts.find((contacts) => (contacts._id) === idd);
  },
  destroyToken() {
    return this.localStorage.removeItem('token')
    },
    getToken() {
      return localStorage.getItem("token")
      },
};