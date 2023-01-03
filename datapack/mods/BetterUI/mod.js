export const name = 'BetterUI';
export const type = 'game';
export const title = 'BetterUI';
export const desc = '';

import { Resources, Packages, Tanki } from 'mods';


const $ = url => import.meta.resolve( url );



export function use () {

	Resources.use(

		[ /background\/.+?webp/, 			$`./bg.webp` ],
		[ /lobby\/iconTankiOnline.+?svg/, 	$`./logo.svg` ],

	);
	
	Packages.use(

		[ 'ApplicationLoaderComponent:', f => {

			f.prototype.onWillMount = function () {};

		}],

		[ 'ApplicationLoaderComponentStyle:', f => {

			const lg = Packages.prop( f, 'logo' );
			const rs = Packages.prop( f[lg], 'ruleSets' );
			const old = f[lg][rs][0];
			
			f[lg][rs][0] = function ( t ) {
				let res = old( t );
				t.display = 'none';
				return res;
			}

		}],

		[ 'AnnouncementHomeScreenComponent:', f => {

			f.prototype.componentDidMount = function () {};

		}],

		[ 'PrimaryMenuItemComponent:', f => {

			f.prototype.notificationIcon_0 = function () {};

		}],

		[ 'lobby.footer.FooterComponent:', f => {

			const clanMenuItem_0 = f.prototype.clanMenuItem_0;

			f.prototype.clanMenuItem_0 = function () {

				const res = clanMenuItem_0.bind( this )();

				res.hasNotification = false;

				return res;

			};

		}],

		[ 'MainScreenComponentStyle:', f => {

			const
			bp = Packages.prop( f, 'buttonPlay' ),
			rs = Packages.prop( f[bp], 'ruleSets' ),
			old = f[bp][rs][0];

			f[bp][rs][0] = function ( t ) {
				
				const
				clr = Packages.get( 'lobby.style.Color:' ).greenButtonBattlePickPlay,
				wa = Packages.prop( clr, 'withAlpha', 1 ),
				res = old( t );

				t.backgroundImage = 'none';
				t.backgroundColor = clr[ wa ]( 0.5 );

				return res;
			}

		}],

		[ 'ChallengesRewardingUserModel:', f => {

			const rewardNotify_1 = Packages.prop( f.prototype, 'rewardNotify', 1 );

			f.prototype[ rewardNotify_1 ] = function () {};

		}],

		[ 'JoinToDMBattleComponent:', f => {

			const teams = Packages.get( '.battle.team.BattleTeam:' );
			const fight = Packages.get( 'ProBattleActions:' ).Fight;

			f.prototype.joinToDM_0 = function () {

				const dispatch_1 = Packages.prop( this.store, 'dispatch', 1 );

				if ( this.connectedState.canEnterToBattleByRank && this.connectedState.canEnterToBattleBySize )
					this.store[ dispatch_1 ]( new fight( this.props.battleId, teams.NONE ) );

			}

		}],

		[ 'JoinToTeamBattleComponent:', f => {

			const fight = Packages.get( 'ProBattleActions:' ).Fight;

			f.prototype.joinToBattle_0 = function ( t, e ) {

				const dispatch_1 = Packages.prop( this.store, 'dispatch', 1 );

				this.store[ dispatch_1 ]( new fight( t, e ) );

			}

		}],

		[ 'BattleHudComponent:', f => {

			f.prototype.buttonsArea_0 = function () {};

		}],

		[ 'ActionsLogHudElement:', f => {

			const layout_1 = Packages.prop( f.prototype, 'layout', 1 );
			const layout = f.prototype[layout_1];

			f.prototype[layout_1] = function ( t ) {

				layout.bind( this )( t );

				this.y /= 2.22;

			}

		}],

		[ 'RugbyComponent', f => {

			const nfd_2 = Packages.prop( f.prototype, 'notifyFlagDelivered', 2 );
			const nfd = f.prototype[ nfd_2 ];

			f.prototype[ nfd_2 ] = function ( t, e ) {

				const
				gtq = Packages.get( 'messages.GetTeamQuery' ),
				send = Packages.get( 'entity.send_' ),
				ist = Packages.get( 'battle.isSameTeam_' ),
				bmc = Packages.get( 'BattleMessageContent:' );

				let i = ist( send( gtq, e ).team, this.getLocalTeam_0() )

				this.playSound_0( i, this.ballTakePositiveSoundPool_0, this.ballTakeNegativeSoundPool_0 );
				this.addBattleLogMessage_0( bmc.RUGBY_GOAL_BLUE, e, i )

			}

		}],

		[ 'JsonLocalizedLoader:', f => {

			const getValue_0 = f.getValue_0;

			f.getValue_0 = function ( ...args ) {

				if ( ! this.wasHooked ) {

					this.wasHooked = true;

					const bm = this.values_0['battle']['hud']['battle_message'];

					if ( bm['RUGBY_GOAL_BLUE'] == '%0 забила гол!' ) bm['RUGBY_GOAL_BLUE'] = '%0 забил гол!';
					if ( bm['RUGBY_GOAL_RED'] == '%0 забила гол!' ) bm['RUGBY_GOAL_RED'] = '%0 забил гол!';

				}

				return getValue_0.bind( this )( ...args );

			}

		}],

		[ 'BattleTabStatisticComponentStyle:', f => {

			const ci = Packages.prop( f, 'containerInside' );
			const rs = Packages.prop( f[ci], 'ruleSets' );
			const old = f[ci][rs][0];
			
			f[ci][rs][0] = function ( t ) {
				let res = old( t );
				t.transform = 'scale(1.2)';
				return res;
			}

		}],

	);

}

export function launch () {

	use();

	Tanki.launch();

}