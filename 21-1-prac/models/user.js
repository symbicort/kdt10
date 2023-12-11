const UserModel = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement : true,
        },
        User_id: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        User_pw: {
            type:DataTypes.STRING(255),
            allowNull: false
        },
        User_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },

    },{
        tableName: 'user', // 테이블 이름을 'User'로 설정
        freezeTableName: true // 테이블 이름을 모델 이름과 동일하게 고정
    });
    return user;

}

module.exports = UserModel;