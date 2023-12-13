﻿// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 20;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 4;
var ary_TitleData = [
 "Cherry Blossoms Are Blooming",
 "Girl’s Reform Manifest",
 "Reborn Superstar!",
 "OTHERS",
 "COVERS"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "SUNRISE MISO-SOUP",            			[0,1,0,0,0,0,0,0,0,0], "hanabiesong/reform.jpg"],
  [1, "Sentimental Heroine",                  	[0,1,0,0,0,0,0,0,0,0], "hanabiesong/reform.jpg"],
  [1, "Bukkowasu!!",          					[0,1,0,0,0,0,0,0,0,0], "hanabiesong/reform.jpg"],
  [1, "Our 7days war",                     		[0,1,0,0,0,0,0,0,0,0], "hanabiesong/reform.jpg"],
  [1, "Reiwa dating apps generation",           [0,1,0,0,0,0,0,0,0,0], "hanabiesong/reform.jpg"],
  [1, "Invisible wall",          				[0,1,0,0,0,0,0,0,0,0], "hanabiesong/reform.jpg"],
  [1, "We love sweets",         				[0,1,0,0,0,0,0,0,0,0], "hanabiesong/reform.jpg"],
  [1, "L.C.G (2019mix)",                   		[0,1,0,0,0,0,0,0,0,0], "hanabiesong/reform.jpg"],
  [1, "Genkai numa life",           			[0,1,0,0,0,0,0,0,0,0], "hanabiesong/reform.jpg"],
  [1, "Want to TIE-UP",        					[0,1,0,0,0,0,0,0,0,0], "hanabiesong/reform.jpg"],

  [1, "Blast Off",         						[0,0,1,0,0,0,0,0,0,0], "hanabiesong/reborn.jpg"],
  [1, "超次元ギャラクシー/Hyperdimension Galaxy",    	[0,0,1,0,0,0,0,0,0,0], "hanabiesong/reborn.jpg"],
  [1, "NEET Game",              				[0,0,1,0,0,0,0,0,0,0], "hanabiesong/reborn.jpg"],
  [1, "今年こそギャル ~初夏ver.~/ BE THE GAL",        [0,0,1,0,0,0,0,0,0,0], "hanabiesong/reborn.jpg"],
  [1, "Tales Of Villain	",                      [0,0,1,0,0,0,0,0,0,0], "hanabiesong/reborn.jpg"],
  [1, "Warning!!",                  			[0,0,1,0,0,0,0,0,0,0], "hanabiesong/reborn.jpg"],
  [1, "我は宇宙最強のインベーダーちゃんである/ME, The Ultimate Invader of the Universe",                [0,0,1,0,0,0,0,0,0,0], "hanabiesong/reborn.jpg"],
  [1, "Tousou",        							[0,0,1,0,0,0,0,0,0,0], "hanabiesong/reborn.jpg"],
  [1, "お先に失礼します。 (Pardon Me, I Have To Go Now)", [0,0,1,0,0,0,0,0,0,0], "hanabiesong/osaki.jpg"],
  [1, "Today’s Good Day & So Epic", 			[0,0,1,0,0,0,0,0,0,0], "hanabiesong/reborn.jpg"],

  [1, "LOVE  Ranbu",                 			[0,0,0,1,0,0,0,0,0,0], "hanabiesong/loveranb.jpg"],
  [1, "Babylon",                 			[0,0,0,1,0,0,0,0,0,0], "hanabiesong/crashover.jpg"],
  [1, "Sweetskiller",                 			[0,0,0,1,0,0,0,0,0,0], "hanabiesong/crashover.jpg"],
  
  [1, "Cherry Blossoms Are Blooming Instrumental", 			[1,0,0,0,0,0,0,0,0,0], "hanabiesong/cherry.jpg"],
  [1, "Envy",                 					[1,0,0,0,0,0,0,0,0,0], "hanabiesong/cherry.jpg"],
  [1, "Time Out",                 				[1,0,0,0,0,0,0,0,0,0], "hanabiesong/cherry.jpg"],
  [1, "Ghost Mania",                 			[1,0,0,0,0,0,0,0,0,0], "hanabiesong/cherry.jpg"],
  [1, "Zero",                 					[1,0,0,0,0,0,0,0,0,0], "hanabiesong/cherry.jpg"],
  [1, "Drastic Nadeshiko",                 		[1,0,0,0,0,0,0,0,0,0], "hanabiesong/cherry.jpg"],
  
  [1, "Believer - cover",   					[0,0,0,0,1,0,0,0,0,0], "hanabiesong/believer.jpg"],
  
];
