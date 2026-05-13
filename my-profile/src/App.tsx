import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Briefcase, Heart, Sparkles, User } from 'lucide-react'

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <User className="h-10 w-10" />
          </div>
          <CardTitle className="text-blue-700">山田 太郎</CardTitle>
          <CardDescription>Yamada Taro</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ProfileRow icon={<Briefcase className="h-4 w-4 text-blue-600" />} label="役割">
            マーケター
          </ProfileRow>
          <ProfileRow icon={<Heart className="h-4 w-4 text-blue-600" />} label="好きなこと">
            読書・コーヒー・散歩
          </ProfileRow>
          <ProfileRow icon={<Sparkles className="h-4 w-4 text-blue-600" />} label="今学んでいること">
            AIで業務アプリを作る
          </ProfileRow>
        </CardContent>
      </Card>
    </main>
  )
}

function ProfileRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-white">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-xs font-medium text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm font-medium text-foreground">{children}</div>
      </div>
    </div>
  )
}
