Session.setDefault('counter', 0);

Template.home.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.home.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  },
  'submit form': function (e) {
    e.preventDefault();

    var input = {
      total: $(e.target).find('[name=total]').val(),
      groupSize: $(e.target).find('[name=groupSize]').val()
    };

    console.log(input.total + ', ' + input.groupSize);
  }

});