/*
 Navicat Premium Data Transfer

 Source Server         : otong
 Source Server Type    : MySQL
 Source Server Version : 100411
 Source Host           : localhost:3306
 Source Schema         : subank

 Target Server Type    : MySQL
 Target Server Version : 100411
 File Encoding         : 65001

 Date: 14/09/2020 22:34:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tbl_nasabah
-- ----------------------------
DROP TABLE IF EXISTS `tbl_nasabah`;
CREATE TABLE `tbl_nasabah`  (
  `id_pel` int NOT NULL AUTO_INCREMENT,
  `no_rek` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `nama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `lahir` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `tgl_lahir` date NULL DEFAULT NULL,
  `tgl_join` datetime(0) NULL DEFAULT NULL,
  `alamat` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  PRIMARY KEY (`id_pel`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_nasabah
-- ----------------------------
INSERT INTO `tbl_nasabah` VALUES (1, '07612345', 'Otong Jaya Sempurna', 'Zimbabwe', '1979-09-10', '2020-09-07 01:51:39', 'Jl. Bersamamu ku bahagia no. 5, Bekasi');
INSERT INTO `tbl_nasabah` VALUES (2, '07654321', 'Sempurna Jaya Otong', 'Somalia', '1984-01-12', '2020-09-09 00:12:33', 'Jl. Kenangan bersama mantan-mantan ku');
INSERT INTO `tbl_nasabah` VALUES (3, '07611100', 'RIO TEGUH ARDIARTA', 'CIAMIS', '1995-10-29', '2020-09-13 18:32:08', 'Rumahku adalah Istanaku, Istanaku adalah Surgaku');
INSERT INTO `tbl_nasabah` VALUES (4, '07622211', 'LUIS SUAREZ', 'BEKASI', '1986-11-14', '2020-09-14 09:30:10', 'Taman pemakaman cendana');

-- ----------------------------
-- Table structure for tbl_transaksi
-- ----------------------------
DROP TABLE IF EXISTS `tbl_transaksi`;
CREATE TABLE `tbl_transaksi`  (
  `id_transaksi` int NOT NULL AUTO_INCREMENT,
  `no_rek` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `rek_penerima` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `rek_pengirim` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `tgl_transaksi` datetime(0) NULL DEFAULT NULL,
  `ket` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `nominal` int NULL DEFAULT NULL,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `kategori` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `saldo` int NULL DEFAULT NULL,
  PRIMARY KEY (`id_transaksi`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_transaksi
-- ----------------------------
INSERT INTO `tbl_transaksi` VALUES (1, '07612345', '07612345', '07611111', '2020-09-10 01:43:56', 'Nabung biar kaya', 1000000, 'Tabungan', 'Transaksi Masuk', 1000000);
INSERT INTO `tbl_transaksi` VALUES (2, '07654321', '07654321', '07611111', '2020-09-10 01:44:49', 'Nabung biar bisa ke old traford', 500000, 'Tabungan', 'Transaksi Masuk', 500000);
INSERT INTO `tbl_transaksi` VALUES (3, '07612345', '07612345', '07611111', '2020-09-10 01:45:54', 'Nyimen lagi', 300000, 'Tabungan', 'Transaksi Masuk', 1300000);
INSERT INTO `tbl_transaksi` VALUES (4, '07612345', '07654321', '07612345', '2020-09-11 20:03:47', 'Tranfer ke Duafa', 50000, 'Transfer', 'Transaksi Keluar', 1250000);
INSERT INTO `tbl_transaksi` VALUES (5, '07654321', '07654321', '07612345', '2020-09-11 20:03:47', 'Tranfer ke Duafa', 50000, 'Transfer Masuk', 'Transaksi Masuk', 550000);
INSERT INTO `tbl_transaksi` VALUES (6, '07611100', '-', '-', '2020-09-13 15:59:02', 'Buka Akun', 0, 'Buka Akun', 'Transaksi Masuk', 0);
INSERT INTO `tbl_transaksi` VALUES (9, '07612345', '07611100', '07612345', '2020-09-14 16:03:56', 'ngisi saldo rio', 300000, 'Transfer', 'Transaksi Keluar', 950000);
INSERT INTO `tbl_transaksi` VALUES (10, '07611100', '07611100', '07612345', '2020-09-14 16:03:56', 'ngisi saldo rio', 300000, 'Transfer Masuk', 'Transaksi Masuk', 300000);
INSERT INTO `tbl_transaksi` VALUES (11, '07622211', '-', '-', '2020-09-14 16:30:10', 'Buka Akun', 0, 'Buka Akun', 'Transaksi Masuk', 0);
INSERT INTO `tbl_transaksi` VALUES (13, '07611100', '07622211', '07611100', '2020-09-14 16:37:28', 'test coba', 50000, 'Transfer', 'Transaksi Keluar', 250000);
INSERT INTO `tbl_transaksi` VALUES (14, '07622211', '07622211', '07611100', '2020-09-14 16:37:30', 'test coba', 50000, 'Transfer Masuk', 'Transaksi Masuk', 50000);

-- ----------------------------
-- Table structure for tbl_user
-- ----------------------------
DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE `tbl_user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `no_rek` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `nama` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `id_verify` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `tgl_add` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_user
-- ----------------------------
INSERT INTO `tbl_user` VALUES (1, '07612345', 'Otong Jaya Sempurna', '$2b$10$WVOZQia9NztWIChvLdcAROxPEg6F5/oX7oL4T.9R9tr7rNKlK.5YG', 'otong123', '2020-09-08');
INSERT INTO `tbl_user` VALUES (2, '07654321', 'Sempurna Jaya Otong', '$2b$10$WVOZQia9NztWIChvLdcAROxPEg6F5/oX7oL4T.9R9tr7rNKlK.5YG', 'jaya123', '2020-09-09');
INSERT INTO `tbl_user` VALUES (3, '07611100', 'RIO TEGUH ARDIARTA', '$2b$10$iLoyh31rvz5sXmk8cqU2fuqX3AWFki9aoSaAZyCoisR8aaVM5nCny', 'riosubank123', '2020-09-13');
INSERT INTO `tbl_user` VALUES (4, '07622211', 'LUIS SUAREZ', '$2b$10$P0Bs7b/vc8lMF1dV8wgehOMJ9cMDinzz.JNrGKXOGR5EfGLNQKMi2', 'luis123', '2020-09-14');

SET FOREIGN_KEY_CHECKS = 1;
