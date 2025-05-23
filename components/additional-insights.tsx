"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts"

export default function AdditionalInsights() {
  // 아르뷔엔 vs 유사 게임 비교 데이터
  const comparisonData = [
    {
      category: "튜토리얼 만족도",
      "유사 게임 평균": 3.926,
      아르뷔엔: 3.862,
      fullMark: 5,
    },
    {
      category: "게임 그래픽 만족도",
      "유사 게임 평균": 4.33,
      아르뷔엔: 4.375,
      fullMark: 5,
    },
    {
      category: "게임 밸런스 만족도",
      "유사 게임 평균": 4.042,
      아르뷔엔: 3.1,
      fullMark: 5,
    },
    {
      category: "지속적 플레이/추천 의향",
      "유사 게임 평균": 4.16,
      아르뷔엔: 3.825,
      fullMark: 5,
    },
    {
      category: "별점",
      "유사 게임 평균": 4.241,
      아르뷔엔: 3.9,
      fullMark: 5,
    },
  ]

  return (
    <div className="space-y-6 tab-content-insights">
      <h2 className="text-2xl font-bold">기타 인사이트</h2>
      <p className="text-gray-300 mb-4">유저 피드백 분석을 통한 추가 인사이트</p>

      {/* 섹션 1: 감성 분석 요약 */}
      <div className="mb-8">
        <div className="bg-blue-600 text-white py-3 px-4 rounded-t-lg font-bold text-lg flex items-center">
          <span className="mr-2">💭</span> 감성 분석 요약 (Sentiment Analysis)
        </div>
        <Card className="rounded-t-none bg-gray-800 border-t-0 border-blue-600 border-2">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-green-500/20 p-2 rounded-full mr-3 mt-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">긍정 응답 다수 (44건)</h3>
                  <p className="text-gray-300 text-sm">
                    게임의 콘셉트, 캐릭터, 그래픽, 추리 요소에 대해 전반적으로 긍정적 의견이 많았음
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-500/20 p-2 rounded-full mr-3 mt-1">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">혼합 반응 (8건)</h3>
                  <p className="text-gray-300 text-sm">
                    '기대된다'면서도 조작이나 시스템 등 일부 미흡함을 지적하는 혼합적 피드백 다수
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-500/20 p-2 rounded-full mr-3 mt-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">부정 응답 (3건)</h3>
                  <p className="text-gray-300 text-sm">
                    렉, 버그, 조작 불편 등 구체적 문제점을 지적한 경우 (소수지만 명확함)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-500/20 p-2 rounded-full mr-3 mt-1">
                  <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">중립 응답 (25건)</h3>
                  <p className="text-gray-300 text-sm">특별한 감정 표현 없이 사실적 내용만 기술한 경우</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 섹션 2: UI/UX 감성 분석 & 개선 아이디어 */}
      <div className="mb-8">
        <div className="bg-purple-600 text-white py-3 px-4 rounded-t-lg font-bold text-lg flex items-center">
          <span className="mr-2">🎮</span> UI/UX·감성 분석 & 개선 아이디어
        </div>
        <Card className="rounded-t-none bg-gray-800 border-t-0 border-purple-600 border-2">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-lg mr-3">
                    ⚠️
                  </div>
                  <h3 className="font-semibold text-purple-300 text-lg">자주 언급된 불편:</h3>
                </div>
                <ul className="space-y-3 pl-11">
                  <li className="relative">
                    <span className="absolute left-[-20px] top-1 w-3 h-3 rounded-full bg-purple-500/50"></span>
                    <p className="text-gray-300">ESC 버튼만으로 창 닫기 가능, X버튼 없음</p>
                  </li>
                  <li className="relative">
                    <span className="absolute left-[-20px] top-1 w-3 h-3 rounded-full bg-purple-500/50"></span>
                    <p className="text-gray-300">설명 문구가 부족하거나 흐름이 끊김</p>
                  </li>
                  <li className="relative">
                    <span className="absolute left-[-20px] top-1 w-3 h-3 rounded-full bg-purple-500/50"></span>
                    <p className="text-gray-300">아이템 이동 시 반복 클릭 필요, 다중 선택 없음</p>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-lg mr-3">
                    💡
                  </div>
                  <h3 className="font-semibold text-purple-300 text-lg">개선 아이디어:</h3>
                </div>
                <ul className="space-y-3 pl-11">
                  <li className="relative">
                    <span className="absolute left-[-20px] top-1 w-3 h-3 rounded-full bg-green-500/50"></span>
                    <p className="text-gray-300">직관적인 UI (닫기 버튼, 빠른 접근 등)</p>
                  </li>
                  <li className="relative">
                    <span className="absolute left-[-20px] top-1 w-3 h-3 rounded-full bg-green-500/50"></span>
                    <p className="text-gray-300">명확한 시각 피드백 (아이템 강조, 진행 방향 등)</p>
                  </li>
                  <li className="relative">
                    <span className="absolute left-[-20px] top-1 w-3 h-3 rounded-full bg-green-500/50"></span>
                    <p className="text-gray-300">반복적 조작 요소 최소화 (퀵슬롯, 자동 겹치기 등)</p>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 섹션 3: 최종 피드백 키워드 인사이트 요약 */}
      <div className="mb-8">
        <div className="bg-green-600 text-white py-3 px-4 rounded-t-lg font-bold text-lg flex items-center">
          <span className="mr-2">🔑</span> 최종 피드백 키워드 인사이트 요약 (고도화)
        </div>
        <Card className="rounded-t-none bg-gray-800 border-t-0 border-green-600 border-2">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex">
                <div className="min-w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">플레이 흐름과 몰입 중심의 구조 강화 요구</h3>
                  <p className="text-gray-300 pl-1">
                    유저들은 스토리 전개와 몰입 요소에 긍정적이지만, 흐름을 방해하는 버벅임/단절/설명 부족에 민감하게
                    반응
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="min-w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">게임 내 안내 부족 반복 지적</h3>
                  <p className="text-gray-300 pl-1">
                    명확한 목적 제시 없이 유도되는 플레이 흐름은 혼란을 주며, 시각 가이드·퀘스트 안내·상호작용 구조 강화
                    필요
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="min-w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">조작감과 UI/UX의 사용 피로 이슈</h3>
                  <p className="text-gray-300 pl-1">
                    불편한 조작은 단순 UX 문제가 아닌 게임 몰입도와 피로감에 직접 연결됨 → 반응 속도, 인터페이스 최적화
                    필요
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="min-w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">플레이어 주도형 경험에 대한 기대</h3>
                  <p className="text-gray-300 pl-1">
                    과잉 설명이 아닌 '유도된 자유도' 구조를 선호함 → 단서 중심 탐색, 추리 요소는 긍정 반응이나 명확한
                    구현 필요
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="min-w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-xl mr-4">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">완성도에 대한 기대치 반영</h3>
                  <p className="text-gray-300 pl-1">
                    단순 체험 피드백이 아닌, 정식 출시를 고려한 고급 사용자의 관점이 반영됨 → 완성도 개선에 대한 의지와
                    제안 풍부
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 섹션 4: 아르뷔엔 vs 유사 게임 비교 */}
      <div>
        <div className="bg-amber-600 text-white py-3 px-4 rounded-t-lg font-bold text-lg flex items-center">
          <span className="mr-2">📊</span> 아르뷔엔 vs 유사 게임 비교
        </div>
        <Card className="rounded-t-none bg-gray-800 border-t-0 border-amber-600 border-2">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <p className="text-gray-300 mb-6 text-center">
                아르뷔엔의 겨울과 유사 장르 게임들의 주요 지표 비교 (5점 만점)
              </p>
              <div className="w-full h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={comparisonData}>
                    <PolarGrid stroke="#444" />
                    <PolarAngleAxis dataKey="category" tick={{ fill: "#fff", fontSize: 12 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 5]} tick={{ fill: "#aaa" }} />
                    <Radar
                      name="유사 게임 평균"
                      dataKey="유사 게임 평균"
                      stroke="#4D96FF"
                      fill="#4D96FF"
                      fillOpacity={0.5}
                    />
                    <Radar name="아르뷔엔" dataKey="아르뷔엔" stroke="#FF6B6B" fill="#FF6B6B" fillOpacity={0.5} />
                    <Legend
                      align="center"
                      verticalAlign="bottom"
                      layout="horizontal"
                      wrapperStyle={{ paddingTop: "20px" }}
                      formatter={(value) => <span style={{ color: "#fff" }}>{value}</span>}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-gray-300 max-w-2xl">
                <h3 className="font-semibold text-white text-lg mb-2">비교 분석 인사이트:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <span className="text-white font-medium">그래픽 만족도</span>는 유사 게임 대비 약간 높은 수준으로,
                    아르뷔엔의 강점으로 작용
                  </li>
                  <li>
                    <span className="text-white font-medium">게임 밸런스 만족도</span>는 유사 게임 대비 현저히 낮은
                    수준으로, 가장 시급한 개선 필요 영역
                  </li>
                  <li>
                    <span className="text-white font-medium">튜토리얼 만족도</span>는 유사 게임과 비슷한 수준이나, 약간
                    낮은 편으로 개선 여지 존재
                  </li>
                  <li>
                    <span className="text-white font-medium">지속적 플레이/추천 의향</span>과{" "}
                    <span className="text-white font-medium">별점</span>은 유사 게임 대비 다소 낮은 수준으로, 전반적인
                    게임 경험 향상 필요
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
