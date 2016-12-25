'use strict';

module.exports = function(sequelize, DataTypes) {
  var Chapitre = sequelize.define('plan_vscol1_chapitres', {
  /*  title: DataTypes.STRING,
    info: DataTypes.STRING,
    active: DataTypes.BOOLEAN,*/
     id: {
      type: DataTypes.INTEGER(20),
      primaryKey: true,
      autoIncrement: true
    },
    id_mat_disc_fils: {
      type: DataTypes.INTEGER(11)
    },
    id_niveau: {
      type: DataTypes.INTEGER(11)
    },
    id_op_saisie: {
      type: DataTypes.INTEGER(11)
    },
    id_parent: {
      type: DataTypes.BIGINT(20)
    },
    type_chapitre: {
      type: DataTypes.ENUM('palier', 'oa', 'chapitre', 'competence')
    },
    libelle: {
      type: DataTypes.TEXT,
      collate: 'latin1_swedish_ci'
    },
    commentaires: {
      type: DataTypes.TEXT,
      collate: 'latin1_swedish_ci'
    },
    lib_integration: {
      type: DataTypes.TEXT,
      collate: 'latin1_swedish_ci'
    },
    z_theme: {
      type: DataTypes.TEXT,
      collate: 'latin1_swedish_ci'
    }

  },{
    timestamps: true,
    createdAt: false,
    updatedAt: 'date_last_modif'
  }
  );
}