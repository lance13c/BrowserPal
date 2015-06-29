/**
 * Created by Lance on 6/28/2015.
 */

// In charge of creating rpg stats

var StatusModel = Backbone.Model.extend({
    defaults: {
        "Health":   "1",
        "Armor":    "1",
        "Magic":    "1",
        "MagicArmor": "1",
        "Agility":  "1",
        "Str":   "1", // Strength
        "Dex":  "1", // Dexterity
        "Con": "1", // Constitution
        "Int": "1", // Intelligence
        "Wis":  "1", // Wisdom
        "Cha":  "1"// Charisma
    }
});

var StatusView = Backbone.View.extend({
    model: new StatusModel(),
    tagName: 'div',
    initialize: function() {
        this.template = _.template($('#status-template').html());
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});