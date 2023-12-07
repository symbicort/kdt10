const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// localhost:PORT/ 기본 주소
// router.get('/', controller.main);

// GET /players - 전체 선수 조회
router.get('/players', controller.getPlayers);

// GET /players/:player_id - 특정 선수 조회
router.get('/players/:player_id', controller.getPlayer);

// POST 선수 추가
router.post('/players',controller.postPlayer);

// PATCH /players/:player_id/team
router.patch('/players/:player_id/team', controller.patchPlayer)

// DELETE /players/:player_id
router.delete('/players/:player_id', controller.deletePlayer);

router.get('/teams', controller.getTeams);

router.get('/teams/:team_id', controller.getTeam);

router.get('/teams/:team_id/players', controller.getTeamPlayers)

module.exports = router;