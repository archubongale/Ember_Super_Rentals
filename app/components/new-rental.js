import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
<<<<<<< HEAD

=======
    }
>>>>>>> 534f5974481e0fdb4ad808a19fe743b05f2db5b6
  },

  save1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('addNewRental', false),
      this.sendAction('save2', params);
    }
<<<<<<< HEAD
  }

=======
  
>>>>>>> 534f5974481e0fdb4ad808a19fe743b05f2db5b6
});
