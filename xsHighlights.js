
(function (){

	
	var obj = {};

	obj.bif = 'AbsValue ArcCosine ArcSine ArcTangent Array_Compare ' +
		'Array_Copy Array_GetMaxIndex Array_GetType ' +
		'Array_SetMaxIndex Array_SetValRange Array_Sort ' +
		'Array_Sum AvgList BarInterval BarFreq Ceiling ' +
		'Cosine CoTangent CurrentBar CurrentDate CurrentTime ' +
		'DateToJulian DateToString DayOfMonth DayOfWeek ' +
		'FormatDate FormatTime EncodeDate EncodeTime ' +
		'ExecOffset ExpValue Floor FracPortion InStr ' +
		'IntPortion JulianToDate LeftStr Log LowerStr ' +
		'MaxBarsBack MaxList MaxList2 MidStr MinList ' +
		'MinList2 Mod Month NthMaxList NthMinList ' +
		'NumToStr Neg Pos Power Print Random RaiseRunTimeError ' +
		'RightStr Round Sign Sine StringToDate StringToTime ' +
		'StrLen StrToNum Square SquareRoot SumList ' +
		'Symbol SymbolName Tangent TimeToString UpperStr ' +
		'Year DateAdd TimeAdd WeekOfMonth WeekOfYear ' +
		'Text UserID Plot1 Plot2 Plot3 Plot4 Plot5 ' +
		'Plot6 Plot7 Plot8 Plot9 Plot10 Plot11 Plot12 ' +
		'Plot13 Plot14 Plot15 Plot16 Plot17 Plot18 ' +
		'Plot19 Plot20 Plot21 Plot22 Plot23 Plot24 ' +
		'Plot25 Plot26 Plot27 Plot28 Plot29 Plot30 ' +
		'Plot31 Plot32 Plot33 Plot34 Plot35 Plot36 ' +
		'Plot37 Plot38 Plot39 Plot40 Plot41 Plot42 ' +
		'Plot43 Plot44 Plot45 Plot46 Plot47 Plot48 ' +
		'Plot49 Plot50 Plot51 Plot52 Plot53 Plot54 ' +
		'Plot55 Plot56 Plot57 Plot58 Plot59 Plot60 ' +
		'Plot61 Plot62 Plot63 Plot64 Plot65 Plot66 ' +
		'Plot67 Plot68 Plot69 Plot70 Plot71 Plot72 ' +
		'Plot73 Plot74 Plot75 Plot76 Plot77 Plot78 ' +
		'Plot79 Plot80 Plot81 Plot82 Plot83 Plot84 ' +
		'Plot85 Plot86 Plot87 Plot88 Plot89 Plot90 ' +
		'Plot91 Plot92 Plot93 Plot94 Plot95 Plot96 ' +
		'Plot97 Plot98 Plot99 DateValue SetPlotLabel ' +
		'DataAlign SetInputName TimeValue Hour Minute ' +
		'Second DateDiff TimeDiff Sin Cos Tan Factorial ' +
		'Combination Permutation GetField GetQuote ' +
		'BarOfDay ';
	obj.sys = 'ACC ADI ADO Angle AR ATR Average AverageIF ' +
		'AvgDeviation AvgPrice Bias BiasDiff BollingerBand ' +
		'BR CCI CloseD CloseM CloseW CloseY CoefficientR ' +
		'CommodityChannel Correlation CountIf CountIfARow ' +
		'Covariance CrossOver CrossUnder D_Value DaysToExpiration ' +
		'DIF DirectionMovement DMO DPO DwLimit EMP ' +
		'ERC Extremes ExtremesArray formatmqy GetLastTradeDate ' +
		'HighD highdays Highest HighestArray HighestBar ' +
		'HighM HighW HighY HL_Osc IFF K_Value KeltnerLB ' +
		'KeltnerMA KeltnerUB LastDayOfMonth LinearReg ' +
		'LinearRegAngle LinearRegSlope LowD Lowest ' +
		'LowestArray LowestBar LowM LowW LowY MA_Osc ' +
		'MACD MAM MI MO MoM Momentum MTM MTM_MA NthDayofMonth ' +
		'NthExtremes NthExtremesArray NthHighest NthHighestArray ' +
		'NthHighestBar NthLowest NthLowestArray NthLowestBar ' +
		'OHLCPeriodsAgo OpenD OpenM OpenW OpenY PercentR ' +
		'PSY QoQ Range RateOfChange RC RSI RSquare ' +
		'RSV SAR SimpleHighest SimpleLowest StandardDev ' +
		'Stochastic Summation SummationIf SwingHigh ' +
		'SwingHighBar SwingLow SwingLowBar TechScore ' +
		'TimeSeriesForecast TRIX TrueAll TrueAny TrueCount ' +
		'TrueHigh TrueLow TrueRange TTIndicator TypicalPrice ' +
		'UpLimit VA VAO VariancePS VHF VPT VR VVA ' +
		'WAD WeightedClose XAverage YoY ';
	obj.constant = 'Sunday Monday Tuesday Wednesday Thursday ' +
		'Friday Saturday PI ';
	obj.keywords = 'Above Over Below Under Cross Cross Above ' +
		'Cross Over Cross Below Cross Under Crosses ' +
		'Crosses Above Crosses Over Crosses Below ' +
		'Crosses Under If Else Begin Then End And ' +
		'Or Not Xor True False For To DownTo While ' +
		'break switch case default once repeat until ' +
		'return IntraBarPersist Numeric NumericArray ' +
		'NumericArrayRef NumericRef NumericSeries ' +
		'NumericSimple String StringArray StringArrayRef ' +
		'StringRef StringSeries StringSimple TrueFalse ' +
		'TrueFalseArray TrueFalseArrayRef TrueFalseRef ' +
		'TrueFalseSeries TrueFalseSimple Bool Double ' +
		'Float Int value condition Ret RetVal RetMsg ' +
		'OutputField SetOutputName SetTotalBar setbarback ' +
		'Array Arrays Input Inputs Var Vars Variable ' +
		'Variables ';
	obj.skipwords = 'A An At Based By Does From Is Of On Place ' +
		'Than The Was ';
	obj.xsfilter = 'date o open c close l low h high v volume ';
	obj.xsquote = 'q_DailyOpen q_DailyHigh q_DailyLow q_DailyVolume ' +
		'q_RefPrice q_AvgPrice q_Last q_Bid q_Ask ' +
		'q_BidAskFlag q_TickVolume q_PreTotalVolume ' +
		'q_PriceChangeRatio q_InSize q_OutSize q_BestBid1 ' +
		'q_BestBid2 q_BestBid3 q_BestBid4 q_BestBid5 ' +
		'q_BestAsk1 q_BestAsk2 q_BestAsk3 q_BestAsk4 ' +
		'q_BestAsk5 q_BestBidSize q_BestAskSize q_BestBidSize1 ' +
		'q_BestBidSize2 q_BestBidSize3 q_BestBidSize4 ' +
		'q_BestBidSize5 q_SumBidSize q_BestAskSize1 ' +
		'q_BestAskSize2 q_BestAskSize3 q_BestAskSize4 ' +
		'q_BestAskSize5 q_SumAskSize q_DailyUplimit ' +
		'q_DailyDownlimit q_AskSize q_BidSize q_DayAmplitude ' +
		'q_PreMatch1 q_PreMatch2 q_PreMatch3 q_PreMatch4 ' +
		'q_BidAskDiff q_OrderRatio q_TotalAmount q_VolumeRatio ' +
		'q_Basis q_Spread q_RemainDays q_CulBidTicks ' +
		'q_CulAskTicks q_AvgLongUnits q_AvgShortUnits ' +
		'q_RemainTradingDays q_CashDirect q_BidUnits ' +
		'q_AskUnits q_MatchUnit q_UpSecurities q_DownSecurities ' +
		'q_UpLimitSecs q_DownLimitSecs q_ExpiredDate ' +
		'q_LastTradingDate q_StrikePrice q_MinTradingShares ' +
		'q_CurrentShareCapital q_NetValuePerShare ' +
		'q_GrossMarginRate q_OpeProfitMarginRate q_OpeRevenuePerShare ' +
		'q_Close1Wago q_Close1Mago q_Close3Mago q_Close1Yago ' +
		'q_CloseOfLastYear q_IntrinsicValue q_TimeValue ' +
		'q_Delta q_Gamma q_Theta q_Vega q_RHO q_TheoreticalPrice ' +
		'q_CPTradeRatio q_CPOIRatio q_Volatility q_ImpliedVolatility ' +
		'q_IOofMoney q_Leverage q_ImpliedVolatilityonBuy ' +
		'q_ImpliedVolatilityonSell q_TargetPrice q_TargetChange ' +
		'q_TargetChangeRatio q_VolatilityDiff q_BidAskDiffRatio ' +
		'q_Profitability q_PremiumRatio q_BreakEvenPoint ' +
		'q_ContractRatio q_RevenueYoY q_RevenueGrowth ' +
		'q_CurrentEPS q_CurrentROE q_TotalTicks q_CurrentCapitalin100Million ' +
		'q_MarketCapin100Million ';
	obj.xsta = 'date time o open c close l low h high v volume ' +
		'OpenInterest OI ';

	window.xs = { highlights: obj };

})();